<script lang="ts">
  import { onMounted } from 'vue'
import api from '../services/api'
import { defineComponent, ref } from 'vue'

  export default({
    name:"Postagens",
    data(){
      return{
        names: ['bruce','maria'],
        loading : true,
        id:this.$route.params.id,
        nome:this.$route.query.nome,
        desc:this.$route.query.desc,

        
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
    

    
  })


</script>

<template>
  <div style="flex: 1 0;min-height: 100px;">
    <p>{{ id }}</p>
    <h2>{{nome}}:</h2>
    <p>{{ desc }}</p>
    <p>{{ musicas }}</p>
    <br>
    <p class="coment">Comentários:</p>
    <div class="blococomentario">
      
      
      
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



