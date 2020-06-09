// \template\ é um campo obrigatorio que irá conter todo HTML do arquivo
// ele possui uma regra que aceita somente 1 componente
<template>
  <!-- tag div: componente escolhido para o template, dento da div poderá conter varios componentes-->
  <div class="af">
    <h1>Aplicativo Financeiro</h1>
    <div class="geral">
      <div class="botoes">
        <!-- 
          tag div:{
            v-if: só irá apresentar o botão do salario quando as variaveis mostrarcampodespesa e mostrarcampodocredito forem igual a false
          }
        -->
        <div v-if="!mostrarcampodespesa && !mostrarcampodocredito">
          <!--
            tag v-btn:{
              @click: chama uma função quando for clicado em cima do elemento
                neste caso chama o metodo mostrarbarraocultarsalario()
            }
          -->
          <v-btn x-large color="sucess" @click="mostrarbarraocultarsalario()" dark>
            <!-- 
              dentro dos {{}} possui uma variavel global difinida no "computed" esse valor será exibino na tela
            -->
            {{botaosalario}}
          </v-btn>
          <!--
            tag br: serve para pular 1 linha
          -->
          <br />
          <br />
        </div>
        <!-- 
          tag div:{
            v-if: só irá apresentar o botão do salario quando as variaveis mostrarcampodosalario e mostrarcampodocredito forem igual a false
          }
        -->
        <div v-if="!mostrarcampodosalario && !mostrarcampodocredito">
          <!--
            tag v-btn:{
              @click: chama uma função quando for clicado em cima do elemento
                neste caso chama o metodo mostrarbarraocultardespesa()
            }
          -->
          <v-btn x-large color="success" @click="mostrarbarraocultardespesa()" dark>
            <!-- 
              dentro dos {{}} possui uma variavel global difinida no "computed" esse valor será exibino na tela
            -->
            {{botaodespesa}}
          </v-btn>
          <!--
            tag br: serve para pular 1 linha
          -->
          <br />
          <br />
        </div>
        <!-- 
          tag div:{
            v-if: só irá apresentar o botão do salario quando as variaveis mostrarcampodosalario e mostrarcampodespesa forem igual a false
          }
        -->
        <div v-if="!mostrarcampodosalario && !mostrarcampodespesa">
          <!--
            tag v-btn:{
              @click: chama uma função quando for clicado em cima do elemento
                neste caso ira definir a variavel mostrarcampodocredito igal ao contrario dela mesma
            }
          -->
          <v-btn
            x-large
            color="success"
            @click="mostrarcampodocredito=!mostrarcampodocredito"
            dark
          >
            <!-- 
              dentro dos {{}} possui uma variavel global difinida no "computed" esse valor será exibino na tela
            -->
            {{botaocredito}}
          </v-btn>
          <!--
            tag br: serve para pular 1 linha
          -->
          <br />
          <br />
        </div>
      </div>
      <div class="campus">
        <!-- 
          tag div:{
            v-if: só irá apresentar o cadastro do salario quando a variavel mostrarcampodosalario for igual a verdadeiro
          }
        -->
        <div class="salario" v-if="mostrarcampodosalario">
          <h1>Salário</h1>
          <!--
            tag v-btn:{
              @click: chama uma função quando for clicado em cima do elemento
                neste caso chama o metodo criarsalario()
            }
          -->
          <v-btn x-large color="sucess" @click="criarsalario()" dark>Criar Salário</v-btn>
          <!--
            tag v-text-field:{
              Campo para digitar e receber um valor,
              v-model:{ define a variavel que o imput ira ultilizar
                neste caso seria a variavel "salario.valor"
              }
              placeholder: dá uma dica do campo
          }-->
          <v-text-field label="Valor" placeholder="valor" v-model="salario.valor" />
          <br />
          <!--
            tag v-text-field:{
              Campo para digitar e receber um valor,
              v-model:{ define a variavel que o imput ira ultilizar
                neste caso seria a variavel "salario.descricao"
              }
              placeholder: dá uma dica do campo
          }-->
          <v-text-field label="Descrição" placeholder="Descrição" v-model="salario.descricao" />
        </div>
        <div class="despesa" v-if="mostrarcampodespesa">
          <h1>Despesas</h1>
          <v-text-field label="Valor" placeholder="valor" />
          <br />
          <v-text-field label="Descrição" placeholder="Descrição" />
        </div>
        <div class="credito" v-if="mostrarcampodocredito">
          <h1>Crédito</h1>
          <v-text-field label="Valor" placeholder="valor" />
          <br />
          <v-text-field label="Descrição" placeholder="Descrição" />
        </div>
      </div>
      <div class="dados">
        <div class="dadossalario">
          <h2>Salário</h2>
          <!--
            tag table: Cria uma tabela
          -->
          <table>
            <!--
              tag tr: cria uma linha
            -->
            <tr>
              <!--
                tag th: cria uma coluna de titulo
              -->
              <th>id</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Ações</th>
            </tr>
            <!--
              tag tr: cria uma linha
                salarios: é a lista de salarios, variavel global
                v-for:
                  ira fazer um loop dentro da raviavel "salarios" e definindo cada "salario" na variavel salario para ser acessada dento da tag "tr"
                    salarios: é a lista de salarios
                    forsalario: é a variavel que vem de dentro dos salarios
                    posicaonalista: é a variavel que contem o numero da posição em que o salario se encontra dentro dos salarios
                    key: é a chave unica para identificar e destinguir cada salario dentro da lista de salarios
            -->
            <tr v-for="(forsalario,posicaonalista) in salarios" :key="posicaonalista">
              <!--
                tag td: cria uma coluna normal
              -->
              <td>
                <!-- 
                  dentro dos {{}} possui uma variavel difinida no "v-for" esse valor será exibino na tela
                -->
                {{posicaonalista}}
              </td>
              <td>
                <!-- 
                  dentro dos {{}} possui uma variavel difinida no "v-for" esse valor será exibino na tela
                -->
                {{forsalario.descricao}}
              </td>
              <td>
                <!-- 
                  dentro dos {{}} possui uma variavel difinida no "v-for" esse valor será exibino na tela
                -->
                R${{forsalario.valor}}
              </td>
              <td>
                <!--
                  tag v-btn:{
                    @click: chama uma função quando for clicado em cima do elemento
                      neste caso chama o metodo editarsalario(posicaonalista) e apagarsalario(posicaonalista)
                      ambos estão passando o parametro posicaonalista, que será recebido no metodo
                  }
                -->
                <v-btn color="primary" @click="editarsalario(posicaonalista)" fab small dark>
                  <!--
                    tag v-icon: exibe um icone de lapis
                  -->
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>.
                <v-btn x-medium color="sucess" @click="apagarsalario(posicaonalista)" fab small dark>
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
// tag script contem as variaveis e as funções
<script>

export default {
  // data: definido as variaveis globais do arquivo
  data: () => ({
    // salario: uma variavel com 2 propriedades(objeto), o valor e a descricao
    salario: {
      descricao: "",
      valor: ""
    },
    // salarios: uma variavel de lista(array), com varios obejtos do tipo salario, definido acima
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
  // methods: é a função que define as funções do arquivo
  methods: {
    // metodo editar salario recebe uma variavel de parametro que é ultilizada para identificar a posição do salario dento da lista de salarios
    editarsalario(posicaonalistarecebido) {
      // chama a função de mostrar o campo do salario
      this.mostrarbarraocultarsalario();
      // define a variavel glogal do salario, igual ao salario que esta na lista segundo a posição que veio do parametro
      this.salario = this.salarios[posicaonalistarecebido];
      // mostra um log no console do "f12"
      console.log("Log do Salário", this.salario);
    },
    // metodo apagar salario recebe uma variavel de parametro que é ultilizada para identificar a posição do salario dento da lista de salarios
    apagarsalario(posicaonalistarecebido) {
      // splice remove o salario a posição do parametro
      this.salarios.splice(posicaonalistarecebido, 1);
    },
    // metodo que cria um salario novo na lista de salarios
    criarsalario() {
      // adiciona o salario na lista de salarios
      this.salarios.push(this.salario);
      // chama a função de ocultar os campos do salario
      this.mostrarbarraocultarsalario();
      // mostra um log no console do "f12"
      console.log("Log do Salário", this.salario);
      // limpa a variavel do salario
      this.salario = {};
    },
    // função para fechar a janela
    fechartudo() {
      window.close();
    },
    // função que mostra ou oculta os campos do salario
    mostrarbarraocultarsalario() {
      // if que verifica se a variavel mostrarcampodosalario é falsa, e se for define como verdadeira
      if (this.mostrarcampodosalario == false) {
        this.mostrarcampodosalario = true;
      // else que é executado caso a condição do if seja falsa, então definindo a variavel como falsa
      } else {
        this.mostrarcampodosalario = false;
      }
    },
    // função que mostra ou oculta os campos da despesa
    mostrarbarraocultardespesa() {
      // define a variavel mostrarcampodespesa igual ao oposto dela
      this.mostrarcampodespesa = !this.mostrarcampodespesa;
    }
  },
  // define as variaveis que são computadas para o arquivo
  computed: {
    // variavel que contem o valor do botão do salrio
    botaosalario() {
      if (this.mostrarcampodosalario == false) {
        return "Adicionar salário";
      } else {
        return "Fechar";
      }
    },
    // variavel que contem o valor do botão do despesa
    botaodespesa() {
      // if que verifica se o botão esta ativo ou não para definir seu nome
      if (this.mostrarcampodespesa == false) {
        return "Despesa";
      } else {
        return "Fechar";
      }
    },
    // variavel que contem o valor do botão do credito
    botaocredito() {
      // if que verifica se o botão esta ativo ou não para definir seu nome
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
v-text-field {
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