
<template>
    <div class="mainlogin">
        <div class="secondmainlogin">
            <div style="display: flex;flex-direction: row;">
                <iconify-icon icon="mdi:user-box"
                    class="createadd"></iconify-icon>
                <h2 class="labellogin">
                    Faça seu Login:</h2>


            </div>

            <div class="divemail">
                <input type="text" placeholder="Email@gmail.com.." class="inputs" v-model="email" />




                <!-- <div class="invalid-feedback">
                            Você deve informar um email válido.
                        </div> -->


                <input type="password" class="inputs" id="passwordInput" v-model="senha" placeholder="digite a senha...">

            </div>


            <!-- <div class="invalid-feedback">
                            A senha é um campo obrigatório.
                        </div> -->


            <button class="myButton" @click="login(email, senha)">Logar</button>




        </div>
    </div>
</template>


<script lang="ts">
import axios from 'axios'
import Header from '../components/Header.vue'
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            senha: ''
        }
    },
    methods: {
        enviar(e, s) {

            console.log('Email: ' + e + ' Senha: ' + s)

        },

        async login(e, p) {


            // Request API.
            axios.post('http://localhost:1337/api/auth/local', {
                identifier: e,
                password: p,
            })
                .then(response => {
                    // Handle success.

                    this.$router.push('/')
                    console.log('Well done!');
                    console.log('User profile', response.data.user);

                    console.log('User token', response.data.jwt);
                    localStorage.setItem('username', response.data.user.username);
                    localStorage.setItem('id', response.data.user.id);
                    localStorage.setItem('email', response.data.user.email);
                    localStorage.setItem('token', response.data.jwt);


                })
                .catch(error => {
                    // Handle error.
                    console.log('An error occurred:', error.response);
                });
        }
    },
    unmounted() {
        document.location.reload();
    }
}




</script>

<style scoped>

.createadd{
    font-size:35px;
    color: #eaeaea;
    margin-right: 5px;
}
.btn-primary {
    width: 100%;
    height: 20px;
}
.mainlogin{
    flex: 1 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.labellogin{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-style: italic;
    letter-spacing: 1px;
}

.secondmainlogin{
   background-color: #332f35;
   display: flex;
   justify-content: center;
   align-items:center;
   flex-direction:column;
   border-radius: 5px;
   padding: 50px;width: 350px;
}

.divemail{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
}
.inputs {
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    border-color: black;
    margin-bottom: 10px;
    border-radius: 50px;
}

.myButton {
    box-shadow: 0px 0px 0px 0px #3dc21b;
    background-color: #332f35;
    border-radius: 28px;
    border-style: solid;
    border-width: 1px;
    border-color: white;
    display: inline-block;
    cursor: pointer;
    color: white;
    font-family: Arial;
    font-size: 17px;
    font-weight: bold;
    width: 100%;
    padding: 5px 31px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #89898999;
}



.myButton:active {
    position: relative;
    top: 1px;
}</style>