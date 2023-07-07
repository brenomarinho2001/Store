<script>
import { onMounted } from 'vue'
import api from '../services/api'
import { defineComponent, ref } from 'vue'
import axios from 'axios'
export default ({
  name: "Postagens",
  data() {
    return {
      names: ['bruce', 'maria'],
      loading: true,
      id: this.$route.params.id,
      data_nome: null,
      data_desc: null,
      mensagem: null,
      n_mensagens: 0,
      comentarios_data: null,
      alerta : ''



    }
  },
  async mounted() {

    let result = await axios.get("http://localhost:1337/api/postagems/" + this.id + "?populate=*")

    let user = localStorage.getItem('username');
    console.log(user)

    if(user == null){
      localStorage.removeItemItem('da');
    }

    let token = localStorage.getItem('token')
    var views_mais = result.data.data.attributes.views + 1

    this.n_mensagens = ((result.data.data.attributes.comentarios.data).length)

    this.comentarios_data = result.data.data.attributes.comentarios.data

    axios.put(`http://localhost:1337/api/postagems/${this.id}`, {
      data: { "views": views_mais }
    },{
            headers: {
                Authorization: `Bearer ${token}`
            }
      })

    this.data_nome = result.data.data.attributes.nome
    this.data_desc = result.data.data.attributes.desc

  },
  methods: {
    enviarmensagem(m) {


      let user = localStorage.getItem('username')

      const Comentario = {
        nome: user,
        desc: this.mensagem,
        postagem: this.$route.params.id,
      };
      
      let token = localStorage.getItem('token')

      console.log(this.mensagem)
      if (user !== null && Comentario.desc != null && Comentario.desc != '') {


        axios.post("http://localhost:1337/api/comentarios?populate=*", {
          data: Comentario
        },{
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).then((response) => {
          console.log(response)
          console.log(this.$route.params.id)
          this.comentarios_data.push(response.data.data)
          this.alerta = 'Comentários enviado!'
          this.mensagem = null
        });
      }
      else {
        this.alerta = 'Os campos estão vazios'
      }

      // axios.put(`http://localhost:1337/api/postagems/${this.id}?populate=*`, {
      // comentarios: {datas}
      // })
    }
  }



})


</script>

<template>
  <div class="mainpage">

    <div class="secondmainpage">
      <h2>{{ data_nome }}</h2>
      <p>{{ data_desc }}</p>

      <br>
      <div>
        <p class="coment">COMMENTS ({{ n_mensagens }}):</p>


      </div>
      <div class="inputcoment">
        <input type="text" placeholder="Digite um comentario..." class="inputs" v-model="mensagem" />
        <p>{{ mensagem }}</p>
        <p>{{ alerta }}</p>
        <button class="btn" @click="enviarmensagem(mensagem)">Enviar</button>
      </div>
      <div class="comentariosfor" v-for="(m, i) in comentarios_data" :key="i">
        <h2 class="nomecomentario">{{ m.attributes.nome }}
        </h2>
        <h4 class="desccomentario">{{
          m.attributes.desc }}</h4>
      </div>

      <div class="blococomentario">
      </div>





    </div>
  </div>
</template>

<style scoped>
* {

  font-style: italic;
}

.mainpage {
  flex: 1 0;
  min-height: 100px;
  display: flex;
  justify-content: center;
}

.desccomentario {
  font-style: normal;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  color: #997577;
}

.secondmainpage {
  margin: 10px;
  width: 90%;
  color: #eaeaea;
}

.nomecomentario {
  font-style: normal;
  font-family: Arial, Helvetica, sans-serif;
  color: #c3a38a;
}


.comentariosfor {
  margin-top: 30px;
}

.inputcoment {
  margin-top: 20px;
}

.blocopostagem {
  background-color: red;
  color: #eaeaea;
  width: 90%;
  margin: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.blocopostagem:hover {
  cursor: pointer;
}

.coment {
  /* border-bottom-width: 1px;
    border-bottom-color: black;
    border-bottom-style: solid; */
}

.btn {
  padding: 10px;
  width: 100%;
  margin: 0 auto;
  border-radius: 50px;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  background-color: #332f35;
  cursor: pointer;
}

.inputs {
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  border-color: black;
  margin-bottom: 10px;
  border-radius: 50px;
}

.titulopostagens {
  margin: 5px;
}

.blococomentario {
  margin-top: 10px;
}
</style>



