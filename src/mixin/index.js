const mixin = {
  data () {
    return {
      pagination: {
        total: 100
      }
    }
  },
  methods: {
    handleQuery () {
      console.log('query')
    }
  }
}
export default mixin
