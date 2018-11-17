<template>
  <div>
    <el-button @click="openModal">弹窗</el-button>
    <component :is="modal" :injectData="injectData" @close="handleColse"></component>
  </div>
</template>

<script>
import Two from './child/two'

export default {
  name: 'dialogs',
  components: {
    Two
  },
  data () {
    return {
      modal: null,
      injectData: {}
    }
  },
  methods: {
    openModal () {
      this.modal = Two
    },
    handleColse () {
      this.modal = null
    }
  }
}
</script>
