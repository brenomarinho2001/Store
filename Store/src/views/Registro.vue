

<template>
    <div style="flex: 1 0;color: white;display: flex;justify-content: center;align-items: center;">
        <div
            style="background-color: #332f35;display: flex;justify-content: center;align-items:center;flex-direction:column;border-radius: 5px;padding: 50px;width: 350px;">
            <div style="display: flex;flex-direction: row;">
                <iconify-icon icon="fluent:clipboard-note-20-filled" style="font-size:35px;color: #eaeaea;"
                     class="createadd"></iconify-icon>
                    <!-- mdi:user-box -->
                <h2
                    style="font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;font-style: italic;letter-spacing: 1px;">
                    Faça seu Registro:</h2>


            </div>

            <div style="margin-top: 20px;display: flex;flex-direction: column;width: 100%;">





            <!-- <div class="invalid-feedback">
                                  Você deve informar um email válido.
                              </div> -->

                <input type="text" class="inputs" v-model="username" placeholder="digite a username...">
                <input type="text" class="inputs" v-model="name" placeholder="digite a seu nome...">
                <input type="text" class="inputs" v-model="email" placeholder="digite a email...">
                <input type="text" class="inputs" v-model="password" placeholder="digite a senha...">


            </div>


        <!-- <div class="invalid-feedback">
                                  A senha é um campo obrigatório.
                              </div> -->


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
            password: ''
        }
    },
    methods: {
        async register(n, p, e, u) {
            console.log(n, p, e, u)

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
                });
        }
    }

})

</script>


<style scoped>
.btn-primary {
    width: 100%;
    height: 20px;
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
	background-color:#332f35;
	border-radius:28px;
	border-style: solid;
    border-width: 1px;
    border-color: white;
	display:inline-block;
	cursor:pointer;
	color:white;
	font-family:Arial;
	font-size:17px;
	font-weight:bold;
    width: 100%;
	padding:5px 31px;
	text-decoration:none;
	text-shadow:0px 1px 0px #89898999;
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
}</style>