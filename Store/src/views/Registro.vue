

<template>
    <div class="mainregistro">
        <div class="secondregistro">
            <div class="registro">
                <iconify-icon icon="fluent:clipboard-note-20-filled"
                    class="createadd"></iconify-icon>
                <!-- mdi:user-box -->
                <h2 class="labelregistro">
                    Faça seu Registro:</h2>


            </div>

            <div class="divregistro">





                <!-- <div class="invalid-feedback">
                                  Você deve informar um email válido.
                              </div> -->

                <input type="text" class="inputs" v-model="username" placeholder="digite a username...">
                <input type="text" class="inputs" v-model="name" placeholder="digite a seu nome...">
                <input type="text" class="inputs" v-model="email" placeholder="digite a email...">
                <input type="password" class="inputs" v-model="password" placeholder="digite a senha...">


            </div>


            <!-- <div class="invalid-feedback">
                                  A senha é um campo obrigatório.
                              </div> -->

            <p>{{ alerta }}</p>
            <button class="myButton" @click="register(name, password, email, username)">Registrar</button>




        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default ({
    name: 'Registro',
    data() {
        return {
            name: '',
            email: '',
            username: '',
            password: '',
            alerta: ''
        }
    },
    methods: {
        async register(n, p, e, u) {
            
            let user = localStorage.getItem('username');
            console.log(user)



            if((n == '') || (p == '') || (e == '') || (u == '') || (n == null || p == null || e == null || u == null)){
                this.alerta = 'Os campos estão vazios'
            }
            else{
                // Request API.
                axios.post('http://localhost:1337/api/auth/local/register', {
                    // Handle success.
                    name: n,
                    password: p,
                    email: e,
                    username: u
                })
                    .then(response => {
                        console.log('DEU CERTO!')
                        this.$router.push('/login')


                    })
                    .catch(error => {
                        // Handle error.
                        console.log('An error occurred:', error.response);
                        this.alerta = 'ocorreu um erro'
                    });
            }
        }
    }

})

</script>


<style scoped>
.divregistro{
   margin-top: 20px;
   display: flex;
   flex-direction: column;
   width: 100%;
}
.createadd{
    font-size:35px;
    color: #eaeaea;
}
.registro{
    display: flex;
    flex-direction: row;
}
.secondregistro{
    background-color: #332f35;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;
    border-radius: 5px;
    padding: 50px;
    width: 350px;
}
.mainregistro{
   flex: 1 0;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
}
.btn-primary {
    width: 100%;
    height: 20px;
}
.labelregistro{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-style: italic;
    letter-spacing: 1px;
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



.myButton:hover {
    background-color: #afafaf5d;

    transition-timing-function: ease;
    transition-duration: 1s;

    width: 98%;
}

.myButton:active {
    position: relative;
    top: 1px;
}
</style>