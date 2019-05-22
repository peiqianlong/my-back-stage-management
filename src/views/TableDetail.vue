<template>
  <div class="animated fadeIn" ></div>
</template>


<style scoped>
.expand-row {
  margin-bottom: 16px;
}
</style>

   
<script>
export default {
  data() {
    return {
      json_list: [],
      video_size: "1M",
      video_duration: "11s",
      video_create_timestamp: "2017-08-10 17:03:54",
      video_name: "p.video",
      porn_count: 100,
      sex_count: 200,
      porn_percent: 10,
      sex_count: 500,
      sex_percent: 70,
      is_video: true,
      is_img: false,
      video_src: "",
      img_result: "",
      page_result_list: [],
      video_result: [
        {
          level: 0,
          time: 1,
          duration: "1s",
          confidence: "0.67"
        },
        {
          level: 0,
          time: 2,
          duration: "3s",
          confidence: "0.71"
        },
        {
          level: 0,
          time: 5,
          duration: "1s",
          confidence: "0.98"
        },
        {
          level: 0,
          time: 6,
          duration: "1s",
          confidence: "0.61"
        },
        {
          level: 0,
          time: 7,
          duration: "10s",
          confidence: "0.38"
        }
      ],
      columns6: [
        {
          title: "级别",
          key: "level",
          render: (h, params) => {
            let level = "";
            if (params.row.level === 0) level = "黄色镜头";
            else if (params.row.level === 1) level = "性感镜头";
            return h("div", [h("strong", level)]);
          },
          filters: [
            {
              label: "黄色镜头",
              value: 1
            },
            {
              label: "性感镜头",
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.level === 0;
            } else if (value === 2) {
              return row.level === 1;
            }
          }
        },
        {
          title: "出现时刻",
          render: (h, params) => {
            return h("div", [
              h(
                "strong",
                {
                  style: {
                    color: "#2d8cf0",
                    cursor: "pointer"
                  }
                },
                params.row.time
              )
            ]);
          }
        },
        {
          title: "持续时间",
          render: (h, params) => {
            return h("div", [h("strong", params.row.duration)]);
          }
        },
        {
          title: "置信度",
          render: (h, params) => {
            return h("div", [h("strong", params.row.confidence)]);
          },
          filters: [
            {
              label: "大于0.90",
              value: 1
            },
            {
              label: "小于0.90",
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.confidence >= 0.9;
            } else if (value === 2) {
              return row.confidence < 0.9;
            }
          }
        }
      ]
    };
  },
  created() {},
  mounted() {
    const vue = this;
    var id = this.$route.params.id;
    let video_list = null;
  },
  methods: {}
};
</script>

<style type="text/css">
.demo-i-circle-custom h1 {
  color: #3f414d;
  font-size: 10px;
  font-weight: normal;
}
.demo-i-circle-custom p {
  color: #657180;
  font-size: 8px;
  margin: 5px 0 2px;
}
.demo-i-circle-custom span {
  display: block;
  padding-top: 15px;
  color: #657180;
  font-size: 10px;
}
.demo-i-circle-custom span :before {
  content: "";
  display: block;
  width: 50px;
  height: 1px;
  margin: 0 auto;
  background: #e0e3e6;
  position: relative;
  top: -20px;
}
.demo-i-circle-custom span i {
  font-style: normal;
  color: #3f414d;
}
</style>