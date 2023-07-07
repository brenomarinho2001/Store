<script lang="ts">
import axios from 'axios'
import { RouterLink, RouterView } from 'vue-router'

import 'iconify-icon'
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
export default {
  name: 'Modal',
  props: {
    ide: String,
    atualizar:Function,
  },
  data() {
    return {
      nomenovo: '',
      descnovo: '',
      open: false
    }
  },
  methods: {
    enviarDados(id, n, d) {
      if (n != '' && d != '') {
        let token = localStorage.getItem('token')
        axios.put(`http://localhost:1337/api/postagems/${id}`, {
          data: { "nome": n, "desc": d }
        },{
            headers: {
                Authorization: `Bearer ${token}`
            }
            }).then(response => {
            console.log(response)
            this.atualizar()
            
          });


      }
    },

    mostrarOuNao() {
      this.open = !this.open
    }
  }
}
</script>





<template>
  <div class="modalgeral">
    <!-- <Header/>

    <RouterView />

    <Footer/> -->
    <iconify-icon icon="mdi:pen" class="item" @click="mostrarOuNao()"></iconify-icon>

    <Transition name="modal" v-if="open">
      <div class="modal-bg">
        <div class="modal" ref="modal">
          <p class="item">Nome novo:</p>
          <input type="text" placeholder="escreva o novo nome" v-model="nomenovo" class="inputpen">

          <p class="item">Descrição nova:</p>
          <input type="text" placeholder="escreva a nova descrição" v-model="descnovo" class="inputpen">

          <button v-on:click="enviarDados(ide, nomenovo, descnovo)" class="atualizar" >Atualizar</button>
        </div>

      </div>
    </Transition>

  </div>
</template>

<style scoped>
.item {
  
  cursor: pointer;
  font-size: 20px;
  color: white;
}

.modal {
  padding-bottom: 20px;
  
  display: flex;
  flex-direction: column;
}

.modalgeral {
  margin-left: 10px
}

.inputpen{
  padding: 10px;
}

.atualizar{
  margin-top: 10px;
  padding: 10px;
}
</style>
