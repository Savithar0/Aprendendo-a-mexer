<template>
  <div class="af">
    <h1>Aplicativo Financeiro</h1>
    <div class="geral">
      <div class="botoes">
        <div v-if="!mostrarcampodespesa && !mostrarcampodocredito">
          <v-btn x-large color="sucess" @click="mostrarbarraocultarsalario()" dark>{{botaosalario}}</v-btn>
          <br />
          <br />
        </div>
        <div v-if="!mostrarcampodosalario && !mostrarcampodocredito">
          <v-btn x-large color="success" @click="mostrarbarraocultardespesa()" dark>{{botaodespesa}}</v-btn>
          <br />
          <br />
        </div>
        <div v-if="!mostrarcampodosalario && !mostrarcampodespesa">
          <v-btn
            x-large
            color="success"
            @click="mostrarcampodocredito=!mostrarcampodocredito"
            dark
          >{{botaocredito}}</v-btn>
          <br />
          <br />
        </div>
      </div>
      <div class="campus">
        <div class="salario" v-if="mostrarcampodosalario">
          <h1>Salário</h1>
          <v-btn x-large color="sucess" @click="criarsalario()" dark>Criar Salário</v-btn>

          <input placeholder="valor" v-model="salario.valor" />
          <br />
          <input placeholder="Descrição" v-model="salario.descricao" />
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
      <div class="dados">
        <div class="dadossalario">
          <h2>Salário</h2>

          <table>
            <tr>
              <th>id</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Ações</th>
            </tr>
            <tr v-for="(forsalario,posicaonalista) in salarios" :key="posicaonalista">
              <td>{{posicaonalista}}</td>
              <td>{{forsalario.descricao}}</td>
              <td>R${{forsalario.valor}}</td>
              <td>
                <v-btn x-medium color="sucess" @click="editarsalario(posicaonalista)" dark>Editar</v-btn>.
                <v-btn x-medium color="sucess" @click="apagarsalario(posicaonalista)" dark>Apagar</v-btn>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data: () => ({
    salario: {
      descricao: "",
      valor: ""
    },
    salarios: [
      {
        descricao: "trabalho 1",
        valor: "2000"
      },
      {
        descricao: "trabalho 2",
        valor: "2000"
      },
      {
        descricao: "trabalho 3",
        valor: "2000"
      }
    ],
    mostrarcampodosalario: false,
    mostrarcampodespesa: false,
    mostrarcampodocredito: false
  }),
  methods: {
    editarsalario(posicaonalistarecebido) {
      this.mostrarbarraocultarsalario();
      this.salario = this.salarios[posicaonalistarecebido];
      console.log("Log do Salário", this.salario);
    },
    apagarsalario(posicaonalistarecebido) {
      this.salarios.splice(posicaonalistarecebido, 1);
    },
    criarsalario() {
      this.salarios.push(this.salario);
      this.mostrarbarraocultarsalario();
      console.log("Log do Salário", this.salario);

      this.salario = {};
    },
    fechartudo() {
      window.close();
    },
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
    }
  },
  computed: {
    botaosalario() {
      if (this.mostrarcampodosalario == false) {
        return "Adicionar salário";
      } else {
        return "Fechar";
      }
    },
    botaodespesa() {
      if (this.mostrarcampodespesa == false) {
        return "Despesa";
      } else {
        return "Fechar";
      }
    },
    botaocredito() {
      if (this.mostrarcampodocredito == false) {
        return "Crédito";
      } else {
        return "Fechar";
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
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>