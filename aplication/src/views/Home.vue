// \template\ é um campo obrigatorio que irá conter todo HTML do arquivo
// ele possui uma regra que aceita somente 1 componente
<template>
  <!-- tag div: componente escolhido para o template, dento da div poderá conter varios componentes-->
  <div class="home">
    <div>
      texto
      <!-- 
        dentro dos {{}} possui uma variavel global difinida no "data" esse valor será exibino na tela
      -->
      {{variavel}}
    </div>
    <div>
      <!--
        tag div:{
          :style: define uma condição de estilo para a div, neste caso
          o plano de fundo "backgroundColor" será definido com o mesmo valor da valiavel "color" definida lá no "data"
        }
        v-if: define a condição que esta div será apresentada somente quando a variavel global "variavel" for identica a palavra 'texto'
      -->
      <div :style="{backgroundColor: color}" class="quadradovermelho" v-if="variavel==='texto'"></div>
      senha = 'texto'
      <!--
        tag br: serve para pular 1 linha
      -->
      <br />
      <!--
        tag input:{
          Campo para diigtar e receber um valor,
          v-model:{ define a variavel que o imput ira ultilizar
            neste caso seria a variavel "variavel"
          }
          type: é o cara que define o tipo de dato que o campo recebe, neste caso um tipo texto
      }-->
      <input type="text" v-model="variavel" />
      <!--
        tag input:{
          Campo para diigtar e receber um valor,
          v-model:{ define a variavel que o imput ira ultilizar
            neste caso seria a variavel "color"
          }
          type: é o cara que define o tipo de dato que o campo recebe, neste caso um tipo texto
      }-->
      cor:
      <input type="text" v-model="color" />
    </div>
     <!-- 
       tag HelloWorld: chama um componete importado dento do script, logo abaixo do </template>

       msg="Bem vindo a minha apli ca ção"
        está passando um texto para dentro do componente, o msg, é uma variavel definida lá no components/HelloWorld.vue
      -->
    <HelloWorld
      msg="Bem vindo a minha apli ca ção"
    />
  </div>
</template>
// tag script contem as variaveis e as funções
<script>
// importa o componente da pasta componentes com o nome de HelloWorld
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  // define o nome dos componentes, caso necessario mudar
  components: {
    HelloWorld
  },
  // data: definido as variaveis globais do arquivo
  data: () => ({
    color: "green",
    variavel: ''
  })
};
</script>
<style scoped>
.quadradovermelho {
  width: 500px;
  height: 10px;
}
</style>