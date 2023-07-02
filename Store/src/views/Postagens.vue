<script lang="ts">
import { onMounted } from 'vue'
import api from '../services/api'
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import 'iconify-icon';
import PostagemCard from '../components/PostagemCard.vue'



export default ({
  name: "Postagens",
  async mounted(){
    let id = localStorage.getItem('id')
    console.log(id)
    let usuario = await axios.get(`http://localhost:1337/api/users/`+ id)
    this.admin = usuario.data.Admin
  
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
      admin: false
    };
  },
  methods: {
    verificaradmin(){
      
    },
    submitForm(n, d) {
      if (n != '' && d != '') {
        const Postagem = {
          nome: n,
          desc: d
        };
        console.log("Nome: " + n);
        console.log("Desc:" + d);
        axios.post("http://localhost:1337/api/postagems?populate=*", {
          data: Postagem
        }).then((response) => {
          this.musicas.push(response.data.data);
          document.location.reload();
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
  },
  components: { PostagemCard },
})




</script>

<template>
  <div class="mainpostagens">

    <div v-if="loading">
      <div class="divpostagens">

        <h1 class="titulopostagens">Fóruns</h1>


        <iconify-icon icon="material-symbols:expand-more"
          @click="mostrarOuNao()" class="createadd" v-if="admin"></iconify-icon>

      </div>

      <!-- material-symbols:add -->
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



                <PostagemCard :nome="m.attributes.nome" :desc="m.attributes.desc" :id="m.id"
                  :coment="m.attributes.comentarios" :visu="m.attributes.views" />
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
</style>



