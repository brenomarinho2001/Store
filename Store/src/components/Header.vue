<template>
    <header>
        <!-- ic:baseline-chat -->
        <div class="header-div">
            <RouterLink to="/"><iconify-icon icon="mdi:rabbit" class="item"></iconify-icon>
            </RouterLink>
            <nav class="itens-header">

                <RouterLink to="/" class="item">Postagens</RouterLink>
                <div v-if="!logado" style="display: flex;">
                    <RouterLink to="/login" class="item">Login</RouterLink>
                    <span class="item-separacao">/</span>
                    <RouterLink to="/registro" class="item">Registro</RouterLink>
                </div>
                <div style="display: flex;" v-else>
                    <p class="item">{{ usuario }}</p>
                    <span class="item-separacao">/</span>

                    <p class="item" @click="sair()">Sair</p>

                </div>

            </nav>
        </div>
    </header>
</template>


<script>

import 'iconify-icon';
export default ({
    name: 'Header',
    data() {
        return {
            logado: false,
            usuario: localStorage.getItem('username')
        }
    },
    methods: {
        sair() {
            this.logado = false
            this.usuario = ''
            localStorage.removeItem('username')
            localStorage.removeItem('id')
            localStorage.removeItem('email')
            localStorage.removeItem('token')
            localStorage.removeItem('da')
            this.$router.push('/login')
        }
    },
    created() {

        var n = localStorage.getItem('username')
        if (n != null) {
            this.logado = true
            this.usuario = n
        }
    },


})
</script>

<style scoped>
header {
    width: 100%;
    background-color: #1f1c23;

}

.itens-header {
    display: flex;
    justify-content: flex-end;

}

.header-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.itens-header:nth-child() {
    margin: 20px;
}

.item {
    margin: 15px;
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;
    color: white;
    background-color: #332f35;
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;

}

.item:hover {
    cursor: pointer;
}

.item-separacao {
    margin-top: 15px;
    padding-left: 1px;
    padding-right: 1px;
    color: white;
    padding: 10px;
}
</style>