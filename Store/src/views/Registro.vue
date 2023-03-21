

<template>
  <div style="flex: 1 0;">
        <div class="col-6 card" >
            <div class="card-body">
                <h5 class="card-title">Registro</h5>
                <div class="alert alert-danger" role="alert">

                </div>
                <form >
                    <div class="mb-3">
                        <label for="emailInput" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="emailInput" placeholder="mail@mail.com">
                        <div class="invalid-feedback">
                            Você deve informar um email válido.
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="passwordInput" class="form-label">Senha</label>
                        <input type="password" class="form-control" id="passwordInput">
                        <div class="invalid-feedback">
                            A senha é um campo obrigatório.
                        </div>
                    </div>
                    <div class="mb-3">
                        <input type="submit" class="float-end btn btn-primary" value="Enviar"/>
                    </div>
                </form>
                
            </div>
        </div>
    </div>
</template>

