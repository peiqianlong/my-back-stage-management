<template>
  <div class="animated fadeIn"></div>
</template>

<script>
import HoverButton from "@/components/Button/HoverButton";
import CoolHoverButton from "@/components/Button/CoolHoverButton";

export default {
  name: "social-buttons",
  components: { HoverButton, CoolHoverButton }
};
</script>

<style scoped lang="css">
.btn {
  margin-bottom: 4px;
}
.doc-header {
  width: 100%;
  border-bottom: 1.5px dashed rgb(6, 40, 115);
  padding-left: 5px;
  padding-top: 5px;

  padding-bottom: 30px;
}
.doc-content {
  margin-top: 10px;

  margin-bottom: 50px;
  padding: 5px;
  line-height: 20px;
}
.doc-content p {
  margin-bottom: 5px;
  margin-top: 5px;
}
.doc-content h5 {
  margin-bottom: 10px;
  margin-top: 10px;
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
