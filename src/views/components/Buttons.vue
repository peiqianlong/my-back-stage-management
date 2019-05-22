<template>
  <div class="animated fadeIn">

  </div>


      
</template>

<script>

export default {
   data () {
            return {
                loading: false,
                loading2: false
            }
        },
        methods: {
            toLoading () {
                this.loading = true;
            },
            toLoading2 () {
                this.loading2 = true;
            }
        }
}


</script>


<style scoped lang="css">
  .btn {
     margin-bottom: 4px;
  }
  
    .showallcode{
            height: 100px;
    }
    .hidecode{
            height: 100%;
    }
    .highlight{
         transition:1000ms ease all;
    }

</style>


