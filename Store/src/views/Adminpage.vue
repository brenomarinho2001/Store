<script lang="ts">
import { onMounted } from 'vue'
import api from '../services/api'
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import 'iconify-icon';
import PostagemCard2 from '../components/PostagemCard2.vue'



export default ({
  name: "Postagens",
  async mounted(){
    let id = localStorage.getItem('id')
    console.log(id)
    let usuario = await axios.get(`http://localhost:1337/api/users/`+ id)
    this.admin = usuario.data.Admin
    localStorage.setItem('admin',usuario.data.Admin)

    if(this.admin == false){
      this.$router.push('/')
    }

    let user = localStorage.getItem('username');
    console.log(user)

    if(user == null){
      localStorage.removeItemItem('admin');
    }
  },
  props: {
    myFunction: {
      type: Function,
      required: true,

      
    }
  },
  setup() {
    const musicas = ref([]);
    const coment = ref([]);
    const fetchMusicas = async () => api.get("http://localhost:1337/api/postagems?populate=*").then((response) => (musicas.value = response.data.data,
      coment.value = response.data.data[0].attributes.comentarios));
    onMounted(fetchMusicas);
    return { musicas };
  },
  data() {
    return {
      names: ["bruce", "maria"],
      loading: true,
      nome_forum: "",
      desc_forum: "",
      criar: false,
      alert: '',
      admin: false,
      desc:'',
      nome:'',
    };
  },
  methods: {
    async myFunction() {
    try {
      const response = await axios.get("http://localhost:1337/api/postagems?populate=*");
      this.musicas = response.data.data
      console.log(this.musicas)
      console.log('CONSEGUI!')
      
      // Faça o que você precisa fazer com os dados retornados
      
      
    } catch (error) {
      // Trate o erro caso ocorra uma falha na solicitação
      console.error(error);
    }
    },
    submitForm(n, d) {
      let token = localStorage.getItem('token')
      if (n != '' && d != '') {
        const Postagem = {
          nome: n,
          desc: d
        };
        console.log("Nome: " + n);
        console.log("Desc:" + d);
        axios.post("http://localhost:1337/api/postagems?populate=*", {
          data: Postagem
        },{
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).then((response) => {
          this.musicas.push(response.data.data);
          
        });
      }
      else {
        this.alert = 'Os campos estão Vazios!'
      }
    },
    mostrarOuNao() {
      if(this.admin == true){
        this.criar = !this.criar
        var a = 'material-symbols:add-circle'
      }
      
    },
    postarforum(n,d){
      if (n != '' && d != '') {
        const Postagem = {
          nome: n,
          desc: d
        };
        let token = localStorage.getItem('token')
        console.log("Nome: " + n);
        console.log("Desc:" + d);
        axios.post("http://localhost:1337/api/postagems?populate=*", {
          data: Postagem
        },{
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).then((response) => {
          this.musicas.push(response.data.data);
          this.alert = 'Deu certo!'
        }).catch((e) => {
          this.alert = String(e)
        });
      }
      else {
        this.alert = 'Os campos estão Vazios!'
      }
    },
      
    
  },
  components: { PostagemCard2 },
})




</script>

<template>
  <div class="mainpostagens">

    <div v-if="loading">
      <div class="mainregistro">
        <div class="secondregistro">
            <div class="registro">
                <iconify-icon icon="fluent:clipboard-note-20-filled"
                    class="createadd"></iconify-icon>
                <!-- mdi:user-box -->
                <h2 class="labelregistro">
                    Faça um fórum:</h2>


            </div>

            <div class="divregistro">





                <!-- <div class="invalid-feedback">
                                  Você deve informar um email válido.
                              </div> -->

                <input type="text" class="inputs" v-model="nome" placeholder="digite a nome...">
                <input type="text" class="inputs" v-model="desc" placeholder="digite a descrição...">
            </div>


            <!-- <div class="invalid-feedback">
                                  A senha é um campo obrigatório.
                              </div> -->

            <p>{{ alert }}</p>
            <button class="myButton" @click="postarforum(nome, desc)">Registrar</button>
            



        </div>
    </div>
      <div>
        <div class="blocoforuns">
          <!-- <p>Loading...</p> -->
          <div v-if="admin">
          <div class="blococriarforum" v-if="criar">

            <input type="text" v-model="nome_forum" class="buttoncreate" placeholder="Escreva o nome do Fórum..">
            <input type="text" v-model="desc_forum" maxlength="40" class="buttoncreate"
              placeholder="Escreva uma descrição para o Fórum..">
            <input type="submit" value="Criar" v-on:click="submitForm(nome_forum, desc_forum)" class="buttoncreate">
            <p class="alert">{{ alert }}</p>
          </div>
        </div>
          <div class="blocopostagem" v-for="(m, i) in musicas" :key="m.id">
            <div>
              <!-- <div style="display:flex">
            <RouterLink to="/forumpage" class="itemforum">
              <h2 class="titulo">{{ m.attributes.nome }}</h2>
            </RouterLink>
            <iconify-icon icon="mdi:pen" style="font-size:25px;" class="item"></iconify-icon>

            <iconify-icon icon="mdi:trash" style="font-size:25px;" class="item"></iconify-icon>

          </div>

          <p>{{ m.attributes.desc }}</p>

         -->
              <div class="nomepost">
                <iconify-icon icon="ion:chatbubbles-sharp" class="icon"
                  @click="mostrarOuNao()"></iconify-icon>



                <PostagemCard2 :nome="m.attributes.nome" :desc="m.attributes.desc" :id="m.id"
                  :coment="m.attributes.comentarios" :visu="m.attributes.views" :admin="admin" :atualizar="myFunction"/>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

.alert{
  color:red;
  text-align: center;
}
.blocopostagem {

  margin: 10px;
  width: 90%;
  padding: 10px;
  min-height: 120px;
  background-color: #332f35;
  border-radius: 20px;

  display: flex;

  /* justify-content: center; */
  flex-direction: column;
}
.createadd{
  font-size:35px;
  color: #eaeaea;
  margin-top: 15px;
}

.icon{
  font-size:25px;
  margin-right: 5px;
  color: #eaeaea;
}

.blococriarforum{
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.nomepost{
  display: flex;
  justify-content: center;
}

a:-webkit-any-link {
  cursor: auto;
}

.mainpostagens{
  flex: 1 0;min-height: 100px;
}

.divpostagens{
  display: flex;
  align-items: center;
  justify-content: center; 
}

.createadd:hover {
  cursor: pointer;
}

.titulo:hover {
  cursor: pointer;

}

.buttoncreate {
  width: 90%;
  margin: 10px;

}

.blocoforuns button {
  width: 100%
}

.blocoforuns {

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


}

.itemforum {
  text-decoration: none;
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-style: italic;
  font-size: 14px;
}

.item {
  cursor: pointer;
  color: #eaeaea
}

.titulopostagens {
  margin: 5px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 50px;
  color: #eaeaea
}
.divregistro{
   margin-top: 20px;
   display: flex;
   flex-direction: column;
   width: 100%;
}
.createadd{
    font-size:35px;
    color: #eaeaea;
}
.registro{
    display: flex;
    flex-direction: row;
}
.secondregistro{
    background-color: #332f35;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;
    border-radius: 5px;
    padding: 50px;
    width: 350px;
}
.mainregistro{
   flex: 1 0;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
}
.btn-primary {
    width: 100%;
    height: 20px;
}
.labelregistro{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-style: italic;
    letter-spacing: 1px;
}
.inputs {
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    border-color: black;
    margin-bottom: 10px;
    border-radius: 50px;
}

.myButton {
    box-shadow: 0px 0px 0px 0px #3dc21b;
    background-color: #332f35;
    border-radius: 28px;
    border-style: solid;
    border-width: 1px;
    border-color: white;
    display: inline-block;
    cursor: pointer;
    color: white;
    font-family: Arial;
    font-size: 17px;
    font-weight: bold;
    width: 100%;
    padding: 5px 31px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #89898999;
}



.myButton:hover {
    background-color: #afafaf5d;

    transition-timing-function: ease;
    transition-duration: 1s;

    width: 98%;
}

.myButton:active {
    position: relative;
    top: 1px;
}
</style>



