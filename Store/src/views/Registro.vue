

<template>
  <div style="flex: 1 0;">
        <div class="col-6 card" style="color:white" >
            <div class="card-body">
                <h5 class="card-title">Registro</h5>
                <div class="alert alert-danger" role="alert">

                </div>

                    <div style="display: flex;flex-direction: column;">
                        <p>eae {{ oi }}</p>
                        <label for="emailInput" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="emailInput" placeholder="Email@mail.com" v-model="email">
                        
                        <label for="emailInput" class="form-label">Senha:</label>
                        <input type="password" class="form-control" id="emailInput" placeholder="Digite sua senha" v-model="password">
                        
                        <label for="emailInput" class="form-label">Usuario:</label>
                        <input type="text" class="form-control" id="emailInput" placeholder="Digite seu usuario" v-model="username">

                        <label for="emailInput" class="form-label">Seu nome:</label>

                        <input type="text" class="form-control" id="emailInput" placeholder="Digite seu nome" v-model="name">




                    </div>
                    <div class="mb-3">
                        <button class="float-end btn btn-primary" value="Enviar" @click="register(name,password,email,username)">Enviar</button>
                    </div>

                
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default({
    name:'Registro',
    data(){
        return{
            name:'',
            email:'',
            username:'',
            password:''
        }
    },
    methods: {
                    async register(n,p,e,u) {
                        console.log(n,p,e,u)
                            
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

