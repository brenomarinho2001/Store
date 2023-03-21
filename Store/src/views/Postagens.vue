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
        loading : false
      }
    }
  })


</script>

<template>
  <div style="flex: 1 0;min-height: 100px;">
    <h1>Página de Postagens</h1>
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else v-for="(m,i) in musicas" :key="i+1">
      
      <p>{{ m.attributes.nome }}</p>

    </div>
    
  </div>
</template>



