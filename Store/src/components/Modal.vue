<script lang="ts">
import axios from 'axios'
import { RouterLink, RouterView } from 'vue-router'

import 'iconify-icon'
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
export default {
  name: 'Modal',
  props: {
    ide: String
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
        axios.put(`http://localhost:1337/api/postagems/${id}`, {
          data: { "nome": n, "desc": d }
        })
          .then(response => {
            console.log(response)
            document.location.reload();
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
          <input type="text" placeholder="escreva o novo nome" v-model="nomenovo">

          <input type="text" placeholder="escreva a nova descrição" v-model="descnovo">

          <button v-on:click="enviarDados(ide, nomenovo, descnovo)">Atualizar</button>
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
</style>
