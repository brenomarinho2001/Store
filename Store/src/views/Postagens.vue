<script lang="ts">
import { onMounted } from 'vue'
import api from '../services/api'
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import 'iconify-icon';
import PostagemCard from '../components/PostagemCard.vue'



export default ({
    name: "Postagens",
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
            criar:false,
            alert:''
        };
    },
    methods: {
        submitForm(n, d) {
            if(n != '' && d != ''){
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
          else{ 
            this.alert = 'Os campos estão Vazios!'
          }
        },
        mostrarOuNao(){
          this.criar = !this.criar
          console.log("oi")
        }
    },
    components: { PostagemCard }
})




</script>

<template>
  <div style="flex: 1 0;min-height: 100px;">

    <div v-if="loading">
      <div style="display: flex;align-items: center;justify-content: center;">
        <iconify-icon icon="eva:people-outline" style="font-size:40px;"></iconify-icon>

        <h1 class="titulopostagens">Página de Fórums</h1>
        <iconify-icon icon="material-symbols:add-circle" style="font-size:35px" @click="mostrarOuNao()" class="createadd" ></iconify-icon>

      </div>
      
      <!-- material-symbols:add -->

      <div class="blocoforuns">
        <!-- <p>Loading...</p> -->
      <div v-if="criar">
      <h2 style="font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;border-top: 1px;border-top-color: black; border-top-style: solid;width: 100%;text-align: center;margin-top: 10px;padding-top: 10px;">Criar fórum:</h2>

      <input type="text"  v-model="nome_forum" class="buttoncreate" placeholder="Escreva o nome do Fórum..">
      <input type="text" v-model="desc_forum" maxlength="40" class="buttoncreate" placeholder="Escreva uma descrição para o Fórum..">
      <input type="submit" value="Criar" v-on:click="submitForm(nome_forum, desc_forum)" class="buttoncreate">
      <p style="color:red;text-align: center;">{{ alert }}</p>
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
         <div style="display: flex;justify-content: center;">
          <iconify-icon icon="ph:chats-circle-duotone" style="font-size:25px;margin-right: 5px;" @click="mostrarOuNao()"></iconify-icon>

          
          <PostagemCard :nome="m.attributes.nome" :desc="m.attributes.desc" :id="m.id" :coment="m.attributes.comentarios"/>
        </div>


        </div>
      </div>
    </div>
    </div>


  </div>
</template>

<style scoped>
.blocopostagem {
  border-width: 1px;
  border-color: black;
  border-style: solid;
  border-radius: 5px;
  margin: 10px;
  width: 90%;
  padding: 10px;



  display: flex;

  justify-content: center;
  flex-direction: column;
}

a:-webkit-any-link {
  cursor: auto;
}
.createadd:hover{
  cursor: pointer;
}

.titulo:hover {
  cursor: pointer;

}

.buttoncreate{
  width: 90%;
  margin: 10px;

}

.blocoforuns button{
  width: 100%
}

.blocoforuns{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.itemforum {
  text-decoration: none;
  color: black;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-style: italic;
  font-size: 14px;
}

.item {
  cursor: pointer;
}

.titulopostagens {
  margin: 5px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}</style>



