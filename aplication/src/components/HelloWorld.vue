// \template\ é um campo obrigatorio que irá conter todo HTML do arquivo
// ele possui uma regra que aceita somente 1 componente
<template>
  <!-- tag h1: componente escolhido para o template, dento da div poderá conter varios componentes-->
    <h1>
      <!-- 
        dentro dos {{}} possui uma variavel global difinida no "props" esse valor será exibino na tela
      -->
      {{msg}}
    </h1>
</template>
// tag script contem as variaveis e as funções
<script>
export default {
  // define o nome do componente
  name: 'HelloWorld',
  // props: define tudo que é variavel que pode ser passada para o componente, e o tipo de conteudo
  // neste caso msg é do tipo de texto
  props: {
    msg: String
  }
}
</script>