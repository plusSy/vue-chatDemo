<template>
  <div class="hello">
    <el-input v-model="label"></el-input>
    <el-button @click="alertFun">按钮</el-button>

    <SylButton :label="label" @defineClick="clickHandle"></SylButton>

    <SylButton label="确定"></SylButton>

    <hr>

    {{ pagination.total }}

    {{ 1 | YN('1') }} {{ 0 | YN}}
  </div>
</template>

<script>
import SylButton from '#/Button/button.vue'

export default {
  name: 'HelloWorld',
  components: {
    SylButton
  },
  data () {
    return {
      label: '取消',
      pagination: {
        total: 0
      }
    }
  },
  methods: {
    alertFun () {
      console.log('点击事件')
    },
    clickHandle (msg) {
      console.log(msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
