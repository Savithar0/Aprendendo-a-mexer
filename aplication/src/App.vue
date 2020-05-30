<template>
  <div id="app">
    <div v-if="!logado" class="deslogado">
      login:
      <input type="text" v-model="login" />
      <br />senha:
      <input type="password" v-model="senha" />
    </div>
    <div v-if="logado" class="logado">
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/af">Af</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data: () => ({
    login: "",
    senha: ""
  }),
  computed: {
    logado() {
      let retorno = false;
      if (this.login === "1" && this.senha === "2") {
        retorno = true;
      }
      return retorno;
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
