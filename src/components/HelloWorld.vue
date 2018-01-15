<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{wordShow}}</p>
    <div class="button" @click="showScan()">click me</div>
  </div>
</template>

<script>
import {getDataAPI} from '@/netAPI/api'
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      wordShow: ''
    };
  },
  methods: {
    showScan() {
      var FNScanner = api.require("FNScanner");
      FNScanner.openScanner(
        {
          autorotation: true
        },
        function(ret, err) {
          if (ret) {
            alert(JSON.stringify(ret));
          } else {
            alert(JSON.stringify(err));
          }
        }
      );
    }
  },
  mounted(){
      this.$store.commit('addCount',5) 
      this.wordShow = this.$store.state.count
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
.button {
  width: 100px;
  height: 30px;
  margin: 0 auto;
  background: #24a03f;
  line-height: 30px;
  color: white;
  border-radius: 8px;
}
</style>
