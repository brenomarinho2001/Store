<script lang="ts">
  import { onMounted } from 'vue'
import api from '../services/api'
import { defineComponent, ref } from 'vue'

  export default({
    name:"Postagens",
    setup(){
      
      const musicas = ref([])

      const fetchMusicas = async() => api.get("http://localhost:1337/api/musicas").then((response) =>(
        musicas.value = response.data.data
        
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
    <h2>Nome da Página:</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam facilis maiores ducimus voluptates ab voluptate id ullam odio necessitatibus amet ex totam hic quo saepe, aliquid repellat laudantium rerum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quaerat, aspernatur recusandae ipsa modi optio. Debitis facilis natus accusamus asperiores dolorem optio, at quas velit voluptas saepe sit ipsam suscipit!</p>
    <br>
    <p class="coment">Comentários:</p>
    <div class="blococomentario">
      <h3>Nome usuário:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repudiandae fuga, voluptas itaque perspiciatis consectetur temporibus quos illo, blanditiis dignissimos quisquam illum est maiores. Non culpa alias maxime. Corporis, doloremque!</p>
    </div>
  </div>
</template>

<style scoped>
  .blocopostagem{
    background-color: red;

    width: 90%;
    margin: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .blocopostagem:hover{
    cursor: pointer;
  }
  .coment{
    border-bottom-width: 1px;
    border-bottom-color: black;
    border-bottom-style: solid;
  }
  .titulopostagens{
    margin: 5px;
  }
  .blococomentario{
    margin-top: 10px;
  }
</style>



