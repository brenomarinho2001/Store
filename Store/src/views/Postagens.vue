<script lang="ts">
  import { onMounted } from 'vue'
import api from '../services/api'
import { defineComponent, ref } from 'vue'


  export default({
    name:"Postagens",
    data(){
      return{
        names: ['bruce','maria'],
        loading : true
      }
    },
    setup(){
      
      const musicas = ref([])

      const fetchMusicas = async() => api.get("http://localhost:1337/api/musicas").then((response) =>(
        musicas.value = response.data.data
        
        
      ))

      

      onMounted(fetchMusicas);


      return {musicas}
      
      
      
    },

    mounted(){
      console.log(this.loading)
      this.loading = false
      console.log(this.loading)
    }
    
    
  })


</script>

<template>
  <div style="flex: 1 0;min-height: 100px;">
      <h1>Página de Postagens</h1>
      <div v-if="loading">
        <p>Loading...</p>
      </div>
      <div v-else>
      <div v-for="(m, i) in musicas" :key="i + 1">
      
        <p>{{ m.attributes.nome }}</p>

      </div>
    </div>
    
    </div>
</template>



