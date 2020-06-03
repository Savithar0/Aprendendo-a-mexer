<template>
  <div class="af">
    {{contador}}
    <h1>Aplicativo Financeiro</h1>
    <div class="geral">
      <div class="botoes">
      <div v-if="!mostrarcampodespesa && !mostrarcampodocredito">
        <v-btn x-large color="sucess" @click="mostrarbarraocultarsalario()" dark>{{botaosalario}}</v-btn>
        <br />
        <br />
      </div>
        <v-btn x-large color="success" v-if="!mostrarcampodosalario && !mostrarcampodocredito" @click="mostrarbarraocultardespesa()" dark>{{botaodespesa}}</v-btn>
        <br />
        <br />
        <v-btn x-large color="success" v-if="!mostrarcampodosalario && !mostrarcampodespesa" @click="mostrarcampodocredito=!mostrarcampodocredito" dark>{{botaocredito}}</v-btn>
        <br />
        <br />
        <v-btn x-large color="success" v-if="!mostrarcampodosalario && !mostrarcampodespesa && !mostrarcampodocredito " @click="window.frames.closewindow()" dark>Fechar</v-btn>
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
        <div class="credito" v-if="mostrarcampodocredito">
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
    mostrarcampodocredito: false,
    contador: 0
  }),
  methods: {
    mostrarbarraocultarsalario() {
      if (this.mostrarcampodosalario == false) {
        this.mostrarcampodosalario = true;
      } else {
        this.mostrarcampodosalario = false;
      }
    },
      mostrarbarraocultardespesa() {
        if (this.mostrarcampodespesa == false) {
          this.mostrarcampodespesa = true;
        } else {
          this.mostrarcampodespesa = false;
        }
    },
  },
  computed: {
    botaosalario() {
      if (this.mostrarcampodosalario == false) {
        return "Adicionar salário"
      } else {
        return "Fechar"
      }
    },
    botaodespesa() {
      if (this.mostrarcampodespesa == false) {
        return "Despesa"
      } else {
        return "Fechar"
      }
    },
    botaocredito() {
      if (this.mostrarcampodocredito == false) {
        return "Crédito"
    } else {
      return "Fechar"
    }
  }, 
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