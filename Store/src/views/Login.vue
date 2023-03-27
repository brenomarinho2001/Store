
<template>
  <div style="flex: 1 0;color: white;" >
        <div class="col-6 card" >
            <div class="card-body">
                <h5 class="card-title">Login:</h5>
                <div class="alert alert-danger" role="alert">

                </div>
                
                    <div class="mb-3">
                        <label for="emailInput" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="emailInput" placeholder="Email@mail.com" v-model="email" >
                        <div class="invalid-feedback">
                            Você deve informar um email válido.
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="passwordInput" class="form-label">Senha</label>
                        <input type="password" class="form-control" id="passwordInput" v-model="senha" placeholder="digite a senha...">
                        <div class="invalid-feedback">
                            A senha é um campo obrigatório.
                        </div>
                    </div>
                    <div class="mb-3">
                        <button class="btn-primary" @click="login(email,senha)">Logar</button>
                    </div>
                
                
            </div>
        </div>
    </div>
</template>


<script lang="ts">
    import axios from 'axios'
  import Header from '../components/Header.vue'
  export default{
    name:'Login',
    data(){
        return{
            email:'',
            senha:''
        }
    },
    methods:{
        enviar(e,s){
            
            console.log('Email: '+e+' Senha: ' + s)

        },
        
        async login(e,p) {
        

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
    unmounted(){
        document.location.reload();
    }
}
    

  
   
</script>

<style scoped>
    .btn-primary{
        width: 100px;
        height: 20px;
    }
</style>