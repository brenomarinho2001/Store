<template>
    <header>

    <div class="header-div">
        <RouterLink to="/"><img src="../assets/logo.svg" height="30" class="item"/></RouterLink>
    <nav class="itens-header">
        
        <RouterLink to="/" class="item">Postagens</RouterLink>
        <RouterLink to="/login" class="item">Login</RouterLink>
        <span class="item-separacao">/</span>
        <RouterLink to="/registro" class="item">Registro</RouterLink>
    </nav>
    </div>
    </header>
</template>


<script>


export default ({
  name:'Header'
})
</script>

<style scoped>
    header{
        width: 100%;
        background-color: #222;

    }
    .itens-header{
        display: flex;
        justify-content: flex-end;
        
    }
    .header-div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .itens-header:nth-child(){
        margin: 20px;
    }

    .item{
        margin: 15px;
        padding-left: 10px;
        padding-right: 10px;
        text-decoration: none;
        color: white;
        font-family:'Courier New', Courier, monospace;
        
    }
    
    .item-separacao{
        margin-top: 15px;
        padding-left: 1px;
        padding-right: 1px;
        color: white;
    }
    
    
</style>