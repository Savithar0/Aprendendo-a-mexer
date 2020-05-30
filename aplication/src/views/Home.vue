<template>
  <div class="home">
    <div>texto{{variavel}}</div>
    <div>
      <div :style="{backgroundColor: color}" class="quadradovermelho" v-if="variavel==='texto'"></div>senha=texto
      <input type="text" v-model="variavel" />
      cor:
      <input type="text" v-model="color" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data: () => ({
    color: "green",
    variavel: ""
  })
};
</script>
<style scoped>
.quadradovermelho {
  width: 500px;
  height: 10px;
}
</style>