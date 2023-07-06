<template>
    <div style="display:flex;width: 100%;justify-content: space-between;">
        <div style="display: flex;">
            <RouterLink :to="{ name: 'forumpage', params: { id: id } }" class="itemforum">

                <h2 class="titulo">{{ nome }}</h2>
                <p>{{ desc }}</p>
                <br>
                <!-- ic:round-remove-red-eye -->
                <div class="remove" v-if="admin">
                    <iconify-icon icon="ic:round-remove-red-eye" class="item" @click='excluirForum(id)'></iconify-icon>
                    <p class="visu">{{ visu }}</p>
                </div>
            </RouterLink>
        </div>

        <div style="display: flex;" v-if="admin">
            <Modal :ide='id'/>

            <iconify-icon icon="mdi:trash" class="item" @click='excluirForum(id)'></iconify-icon>
        </div>







    </div>
</template>

<script>
import 'iconify-icon';
import axios from 'axios'
import Modal from './Modal.vue'
export default {
    name: 'Postagem',
    components: {
        Modal
    },
    props: {
        nome: 'String',
        desc: 'String',
        id: 'String',
        coment: "String",
        visu: 'Number',
        admin: false
    },
    methods: {
        excluirForum(id) {
            let token = localStorage.getItem('token')
            console.log(token)
            axios.delete(`http://localhost:1337/api/postagems/`+id,{
            headers: {
                Authorization: `Bearer ${token}`
            }
            })
            .then(response => {
                // O código aqui será executado quando a requisição for bem-sucedida
                console.log("Requisição de exclusão bem-sucedida:", response.data);
                
            })
            .catch(error => {
                // O código aqui será executado se ocorrer um erro durante a requisição
                console.error("Erro na requisição de exclusão:", error);
            });

          

        }
    }

}


</script>


<style scoped>
.visu {
    text-align: center;
}

.remove {
    display: flex;
    align-items: center;
}

.itemforum {
    text-decoration: none;
    color: #eaeaea;
    font-style: italic;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

}

.itemforum p {
    font-size: 15px;

}

.item {
    cursor: pointer;
    color: white;
    margin-left: 15px;
    margin-right: 15px;
}
</style>