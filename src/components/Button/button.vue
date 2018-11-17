<template>
  <div class="button">
    <button @click="changeFun">{{label}}</button>
  </div>
</template>

<script>
export default {
  name: 'SylButton',
  props: {
    size: {
      type: [String, Number],
      default: 'middle'
    },
    label: {
      type: String,
      default: '按钮'
    }
  },
  methods: {
    changeFun (ev) {
      this.$emit('defineClick', ev)
    }
  }
}
</script>
