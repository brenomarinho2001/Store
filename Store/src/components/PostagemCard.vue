<template>
    <div style="display:flex;width: 100%;justify-content: space-between;">
            <div>
            <RouterLink :to="{name: 'forumpage',params:{id:id},query:{nome:nome,desc:desc}}" class="itemforum">
                
              <h2 class="titulo">Nome Fórum: {{ nome }}</h2>
              <p>{{ desc }}</p>
            </RouterLink>
            </div>
            
            <div>
            <Modal :ide='id'/>

            <iconify-icon icon="mdi:trash" style="font-size:20px;" class="item" @click='excluirForum(id)'></iconify-icon>
            </div>   
            

          

          


    </div>
</template>

<script>
import 'iconify-icon';
import axios from 'axios'
import Modal from '../components/Modal.vue'
export default {
    name:'Postagem',
    components:{
        Modal
    },
    props:{
        nome:'String',
        desc: 'String',
        id:'String',
        coment:"String"
    },
    methods:{
        excluirForum(id){
            
            axios.delete(`http://localhost:1337/api/postagems/${id}`).then((response) => {
                console.log("oi")
                document.location.reload(true);
            });
            
        }
    }

}


</script>


<style scoped>
    .itemforum {
    text-decoration: none;
    color: black;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-style: italic;
    font-size: 14px;
    }

    .itemforum p{
        font-size: 12px;
        padding-right: 30px;
    }

    .item {
    cursor: pointer;
    
    }
</style>