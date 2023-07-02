<template>
    <div style="display:flex;width: 100%;justify-content: space-between;">
        <div style="display: flex;">
            <RouterLink :to="{ name: 'forumpage', params: { id: id } }" class="itemforum">

                <h2 class="titulo">{{ nome }}</h2>
                <p>{{ desc }}</p>
                <br>
                <!-- ic:round-remove-red-eye -->
                <div class="remove">
                    <iconify-icon icon="ic:round-remove-red-eye" class="item" @click='excluirForum(id)'></iconify-icon>
                    <p class="visu">{{ visu }}</p>
                </div>
            </RouterLink>
        </div>

        <div style="display: flex;">
            <Modal :ide='id' />

            <iconify-icon icon="mdi:trash" class="item" @click='excluirForum(id)'></iconify-icon>
        </div>







    </div>
</template>

<script>
import 'iconify-icon';
import axios from 'axios'
import Modal from '../components/Modal.vue'
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
        visu: 'Number'
    },
    methods: {
        excluirForum(id) {

            axios.delete(`http://localhost:1337/api/postagems/${id}`).then((response) => {
                console.log("oi")
                document.location.reload(true);
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