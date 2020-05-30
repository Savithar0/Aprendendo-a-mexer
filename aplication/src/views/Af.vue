<template>
  <div class="af">
    {{contador}}
    <h1>Aplicativo Financeiro</h1>
    <div class="geral">
      <div class="botoes">
        <v-btn x-large color="sucess" @click="contador++" dark>Adicionar Salário</v-btn>
        <div>
          <br />
          <v-btn x-large color="success" @click="despesa(1)" dark>Despesa</v-btn>
          <div>
            <br />
            <v-btn x-large color="success" dark>Crédito</v-btn>
          </div>
          <br />
          <v-btn x-large color="success" @click="window.frames.closewindow()" dark>Fechar</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data: () => ({
    contador: 0
  }),
  methods: {
    despesa(valor) {
    
    }
  }
};
</script>