<template>
  <div id="app" class="p-4">
    <h2>《长安十二时辰》--望楼传信系统（二进制）</h2>

    <h4 class="p-4">
      <span v-for="(n,index) in chars" :key="index">{{n}}{{index}}</span>
    </h4>

    <div class="pt-3 d-flex justify-content-center">
      <div
        class="box"
        v-for="(n,index) in lights"
        :key="index"
        :class="{active:n}"
        @click="$set(lights,index,1-n)"
      >{{n}}</div>
    </div>

    <div class="p-4">{{num}}:{{char}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lights: Array(4).fill(0),
      chars: "督长 狼 人 东市 西市 皇城 酒店 出城 成都".split(" ")
    };
  },
  computed: {
    num() {
      return parseInt(this.lights.join(""), 2);
    },
    char() {
      return this.chars[this.num];
    }
  }
};
</script>

<style>
body {
  width: 100%;
  height: 100vh;
  background: #000;
  color: #ecc;
  font-family: sans-serif;
  text-align: center;
}
.box {
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #ccc;
  color: rgb(235, 36, 36);
}
.box.active {
  background: rgb(202, 33, 33);
  color: #333;
}
h4 span {
  display: inline-block;
  width: 2rem;
}
</style>