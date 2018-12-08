class Spark {
  constructor () {
    this.doc = null

    this.templateString = ''
    this.sparkString = ''
    this.sparkSelectors = {}

    this.sparkURL = '../config.spk'
    this.pageApiURL = './api'
    this.templateDir = '../'
    this.templateFile = 'index.html'
    this.pageDir = '/'

    this.publishApiURL = './api/publish.php'
    this.publishDir = '../../dist/'
    this.start()
  }

  async start () {
    this.sparkString = await this.getSpark()
    this.sparkSelectors = this.analyzeSpark(this.sparkString)
    this.templateString = await this.getTemplate()

    this.pageData = (await this.getData())[this.pageDir]
    await this.setPreview(this.templateString)
    this.setStyleRules()
    this.spark(this.doc, this.sparkSelectors)
  }

  async getSpark () {
    return new Promise((resolve, reject) => {
      fetch(this.sparkURL).then(response => response.text()).then((text) => {
        resolve(text)
      })
    })
  }

  analyzeSpark (spark) {
    let selectors = {}
    spark.replace(/[\n\r\t\s]/g, '').replace(/}$/, '').split('}').forEach((value) => {
      const selectorSplited = value.split('{')
      let options = {}
      selectorSplited[1].replace(/;$/, '').split(';').forEach((option) => {
        const optionSplited = option.split(':')
        options[optionSplited[0]] = optionSplited[1]
      })
      selectors[selectorSplited[0]] = options
    })

    return selectors
  }

  async getData () {
    return new Promise((resolve, reject) => {
      fetch(this.pageApiURL).then(response => response.json()).then((data) => {
        resolve(data)
      })
    })
  }

  async putData (data) {
    console.log(data)
    return new Promise((resolve, reject) => {
      fetch(this.pageApiURL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
      }).then(response => response.text()).then((text) => {
        resolve()
      })
    })
  }

  async getTemplate () {
    return new Promise((resolve, reject) => {
      fetch(this.templateDir + this.templateFile).then(response => response.text()).then((text) => {
        resolve(text)
      })
    })
  }

  async setPreview (template) {
    const edit = document.querySelector('#edit')
    while (edit.firstChild) {
      edit.removeChild(edit.firstChild);
    }

    const iframe = document.createElement('iframe')
    edit.appendChild(iframe)
   
    // ローディングバグ対策
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.doc = iframe.contentDocument
        this.doc.write(template)
        resolve()
      }, 100)
    })
  }

  setStyleRules () {
    this.addStyleRule(this.doc, '[contenteditable=true]:empty:before{content:attr(placeholder);opacity:0.4}')
  }

  spark (doc, selectors, onlyRender = false) {
    Object.keys(selectors).forEach((selectorKey, selectorIndex) => {
      const selector = selectors[selectorKey]
      const element = doc.querySelector(selectorKey)
      if (!element) return
      if (!onlyRender) element.setAttribute('contenteditable', 'true')

      Object.keys(selector).forEach((optionKey, optionIndex) => {
        const option = selector[optionKey]
        if (optionKey === 'var') {
          if (!onlyRender) {
            element.setAttribute('placeholder', element.innerHTML)
            element.addEventListener('input', (e) => {
              this.saveData(option, element.innerHTML)
            })
          }
          element.innerHTML = this.getVariableData(option)
        }
      })
    })
  }

  getVariableData (variable) {
    return (this.pageData[variable]) ? this.pageData[variable] : ''
  }

  async saveData (variable, value) {
    const data = await this.getData()
    data[this.pageDir][variable] = value
    await this.putData(data)
    this.pageData = data[this.pageDir]
  }

  async publish () {
    const html = await this.getPageHTML()
    await this.publishHTML(this.publishDir + this.templateFile, html)
  }

  async getPageHTML () {
    const publish = document.querySelector('#publish')
    const iframe = document.createElement('iframe')
    while (publish.firstChild) {
      publish.removeChild(publish.firstChild);
    }
    publish.appendChild(iframe)

    const doc = iframe.contentDocument
    doc.write(this.templateString)
    this.spark(doc, this.sparkSelectors, true)

    const html = this.templateString.replace(/<body>[\s\S]*<\/body>/, '<body>' + doc.body.innerHTML + '</body>')
    return html
  }

  async publishHTML (path, html) {
    console.log(html)
    return new Promise((resolve, reject) => {
      fetch(this.publishApiURL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({path: path, html: html})
      }).then(response => response.text()).then((text) => {
        resolve()
      })
    })
  }

  addStyleRule (doc, rule) {
    const style = doc.createElement('style')
    doc.head.appendChild(style)
    style.sheet.insertRule(rule, style.sheet.cssRules.length)
  }
}

