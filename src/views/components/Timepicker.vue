<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      value1: "09:41:00",
      value2: ["09:41:00", "12:00:00"],
      open: false,
      value3: ""
    };
  },
  methods: {
    handleClick() {
      this.open = !this.open;
    },
    handleChange(time) {
      this.value3 = time;
    },
    handleClear() {
      this.open = false;
    },
    handleOk() {
      this.open = false;
    }
  }
};
</script>

<style type="text/css">
.doc-header {
  width: 100%;
  border-bottom: 1.5px dashed rgb(6, 40, 115);
  padding: 5px;
}
.doc-content {
  margin-bottom: 20px;
  font-size: 12px;
  padding: 5px;
  line-height: 20px;
}
.showallcode {
  height: 100px;
}
.hidecode {
  height: 100%;
}
.highlight {
  transition: 1000ms ease all;
}
</style>

