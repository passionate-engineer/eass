export default {
  methods: {
    /**
     * 文字列をケバブケース化する
     * @param str : 変換する文字列
     * @return str : ケバブケース化された文字列
     */
    getKebabCase (str) {
      return str.replace(/ /g, '-')
    },

    /**
     * 配列からランダムな要素を取得する
     * @param ary : 配列要素
     * @return item : ランダムに取得した要素
     */
    getArrayRandom (ary) {
      return ary[Math.floor(Math.random() * ary.length)]
    }
  }
}
