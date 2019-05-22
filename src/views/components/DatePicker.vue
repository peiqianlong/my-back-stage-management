<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      showcodeall: true,
      open: false,
      value3: "",
      value1: "2016-01-01",
      value2: ["2016-01-01", "2016-02-15"],
      options1: {
        disabledDate(date) {
          return date && date.valueOf() < Date.now() - 86400000;
        },
        shortcuts: [
          {
            text: "今天",
            value() {
              return new Date();
            },
            onClick: picker => {
              this.$Message.info("点击了今天");
            }
          },
          {
            text: "昨天",
            value() {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              return date;
            },
            onClick: picker => {
              this.$Message.info("点击了昨天");
            }
          },
          {
            text: "一周前",
            value() {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              return date;
            },
            onClick: picker => {
              this.$Message.info("点击了一周前");
            }
          }
        ]
      },
      options2: {
        disabledDate(date) {
          const disabledDay = date.getDate();
          return disabledDay === 15;
        },
        shortcuts: [
          {
            text: "最近一周",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            }
          },
          {
            text: "最近一个月",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            }
          },
          {
            text: "最近三个月",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              return [start, end];
            }
          }
        ]
      }
    };
  },
  methods: {
    changecodestate: function() {
      this.showcodeall = !this.showcodeall;
    },
    handleClick() {
      this.open = !this.open;
    },
    handleChange(date) {
      this.value3 = date;
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
