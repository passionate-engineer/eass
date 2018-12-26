# Spark
## Editable Spark Sheet(.ess)
Gradually adoptable JavaScript framework for building a Website template.

# Ideas
+ No administration screen, and no use serverside rendering language. (PHP, Ruby on Rails, etc...)
  + Aim to reduce administration screen to the minimum by integrating template and administration screen.
  + After editing, HTML is output statically.
+ Easily incorporate from original HTML.
  + To make it a template, the appropriate attributes.

# Usage
### 1. Load the spark library
```
<script src="https://passionate.engineer
<script>
new spark({
  editCommand: 'Ctrl + Alt + E',
  password: true,
  endpoint: 'http://passionate.engineer/spark/1_blog/,
  
})
</script>
<link rel="editablesheet" href="./editables.es" />
```

### 2. Add s-type and s-model attribute to HTML
If you want to provide text editing, set to s-type="text", and other when providing image editing, set to s-type="image". Select the appropriate type according to the editing.
Also, to link the variables of the edited data, please specify the variable of v-model.

### 3. Edit config.json for setting
Describe the hierarchy of pages and the environment variables used in the page.
```
.text1 {
  type: text;
  var: text1;
}

.text2 {
  type: text;
  var: text2;
}
```
