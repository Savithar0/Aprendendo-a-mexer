<template>
  <div class="af">
    {{contador}}
    <h1>Aplicativo Financeiro</h1>
    <div class="geral">
      <div class="botoes">
        <v-btn x-large color="sucess" @click="mostrarbarraocultarsalario()" dark>{{botaosalario}}</v-btn>
        <br />
        <br />
        <v-btn x-large color="success" dark>Despesa</v-btn>
        <br />
        <br />
        <v-btn x-large color="success" dark>Crédito</v-btn>
        <br />
        <br />
        <v-btn x-large color="success" @click="window.frames.closewindow()" dark>Fechar</v-btn>
      </div>
      <div class="campus">
        <div class="salario" v-if="mostrarcampodosalario">
          <h1>Salário</h1>
          <input placeholder="valor" />
          <br />
          <input placeholder="Descrição" />
        </div>
        <div class="despesa" v-if="mostrarcampodespesa">
          <h1>Despesas</h1>
          <input placeholder="valor" />
          <br />
          <input placeholder="Descrição" />
        </div>
        <div class="credito" v-if="mostrarcampocredito">
          <h1>Crédito</h1>
          <input placeholder="valor" />
          <br />
          <input placeholder="Descrição" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data: () => ({
    mostrarcampodosalario: false,
    mostrarcampodespesa: false,
    mostrarcampocredito: false,
    contador: 0
  }),
  methods: {
    mostrarbarraocultarsalario() {
      if (this.mostrarcampodosalario == false) {
        this.mostrarcampodosalario = true;
      } else {
        this.mostrarcampodosalario = false;
      }
    }
  },
  computed: {
    botaosalario() {
      if (this.mostrarcampodosalario == false) {
        return "Adicionar salário"
      } else {
        return "Fechar"
      }
    }
  }
};
</script>
<style  scoped>
input {
  margin-top: 2px;
  border: solid 1px;
  border-color: blue;
}
.campus {
  text-align: center;
}
</style>