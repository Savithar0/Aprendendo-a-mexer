// \template\ é um campo obrigatorio que irá conter todo HTML do arquivo
// ele possui uma regra que aceita somente 1 componente
<template>
  <!-- tag div: componente escolhido para o template, dento da div poderá conter varios componentes-->
  <div id="app">
    <!--
      tag div:{
        v-if:{
            é um if que esta recebendo uma variavel global que está sendo definida no "computed",
            e esta verificando se é verdadeira ou falsa
            caso verdadeira não exibe a div, caso falso exibe nada
              Obs: validação inversa pois contem um "!" na frente
    }-->
    <div v-if="!logado" class="deslogado">
      <!--
        tag v-text-field:{
          Campo para diigtar e receber um valor,
          v-model:{ define a variavel que o imput ira ultilizar
            neste caso seria a variavel do Login
          }
      }-->
      <v-text-field label="Login" type="text" v-model="login" hint="O login é 1" />
      <!--
        tag br: serve para pular 1 linha
      -->
      <br />
      <!--
        tag v-text-field:{
          Campo para diigtar e receber um valor,
          v-model:{ define a variavel que o imput ira ultilizar
            neste caso seria a variavel do senha
          }
          type: é o cara que define o tipo de dato que o campo recebe, neste caso um tipo password, senha
      }-->
      <v-text-field
        label="Senha"
        v-model="senha"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        hint="A senha é 2"
        @click:append="show1 = !show1"
      />
    </div>
    <!--
      tag div:{
        v-if:{
            é um if que esta recebendo uma variavel global que está sendo definida no "computed",
            e esta verificando se é verdadeira ou falsa
            caso verdadeira exibe a div, caso falso não exibe nada
    }-->
    <div v-if="logado" class="logado">
      <div class="esquerda">
        <v-btn color="grey darken-2" @click.stop="drawer = !drawer" outline icon small>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
      <v-app dark>
        <v-navigation-drawer v-model="drawer" absolute color="grey darken-2" temporary>
          <!--
          tag router-link: dereciona o usuario para a pagina definida no parametro "to"
          as paginas são configuradas dentro de 'router/index.js'
          -->
          <br />
          <v-btn depressed block color="secondary" to="/">Home</v-btn>
          <v-btn depressed block color="secondary" to="/af">Af</v-btn>
          <v-btn depressed block color="secondary" to="/appfinanceiro">App Financeiro</v-btn>
        </v-navigation-drawer>
        <!--
          tag router-view: exibe a pagina selecionada acima
        -->
        <router-view />
      </v-app>
    </div>
  </div>
</template>
// tag script contem as variaveis e as funções
<script>
export default {
  // data: define todas as variaveis globais do arquivo
  data: () => ({
    login: "",
    senha: "",
    show1: false,
    drawer: null
  }),
  // compute: define variaveis globais que são calculadas
  computed: {
    // logado(): uma variavel glogal calculada, aqui ela retorna verdadeiro ou falso
    logado() {
      // let: define uma variavel dentro da função, não é acessivel fora de "logado()"
      // seta o retorno igual a falso
      let retorno = false;
      // if: traduzindo
      // se (login global for identico a 1 e a senha global for identica a 2) faça a função
      if (this.login === "1" && this.senha === "2") {
        // função: define a variavel retorno igual a verdadeiro
        retorno = true;
      }
      //retorna o valor da variavel retorno, sendo verdadeiro ou falso
      return retorno;
    }
  }
};
</script>
// estilos em css da aplicação, o que deixa "bonitinho"
<style>
.esquerda {
  text-align: left;
}
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
