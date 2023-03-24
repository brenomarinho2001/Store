<script lang="ts">
  import { onMounted } from 'vue'
import api from '../services/api'
import { defineComponent, ref } from 'vue'

  export default({
    name:"Postagens",
    setup(){
      
      const musicas = ref([])
      const coment = ref([])

      const fetchMusicas = async() => api.get("http://localhost:1337/api/musicas?populate=*").then((response) =>(
        musicas.value = response.data.data,
        coment.value = response.data.data[0].attributes.comentarios
        
      ))

      onMounted(fetchMusicas);

      return {musicas}
      
    },
    data(){
      return{
        names: ['bruce','maria'],
        loading : true,
        
      }
    }
  })


</script>

<template>
  <div style="flex: 1 0;min-height: 100px;">
    
    <div v-if="loading" >
      <h1 class="titulopostagens">Página de Postagens</h1>
      <!-- <p>Loading...</p> -->
      <RouterLink to="/forumpage" class="itemforum"><div class="blocopostagem" v-for="(m,i) in musicas" :key="i+1">
        <div>
      
      <h2>{{ m.attributes.nome }}</h2>
      <p>{{  m.attributes.desc }}</p>

      
     
    </div></div></RouterLink>

    </div>
    
    
  </div>
</template>

<style scoped>
  .blocopostagem{
    border-bottom-width: 1px;
    border-bottom-color: black;
    border-bottom-style: solid;

    width: 90%;
    margin: 5px;
    margin-bottom: 25px;
    display: flex;

    justify-content: center;
    flex-direction: column;
  }
  .blocopostagem:hover{
    cursor: pointer;

  }
  .itemforum{
    text-decoration: none;
    color: black;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-style: italic;
    font-size: 14px;
  }
  .titulopostagens{
    margin: 5px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
</style>



