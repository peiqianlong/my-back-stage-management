<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      modal1: false
    };
  },
  methods: {
    ok() {
      (this.modal1 = false), this.$Message.info("点击了确定");
    },
    cancel() {
      this.$Message.info("点击了取消");
    }
  }
};
</script>
