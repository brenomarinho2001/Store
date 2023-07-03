# Fórum

Uma Fórum para pessoas profissionais que vão se comunicar com outros profissionais.

Para executar este projeto siga os passos descritos no arquivo [passo-a-passo](passo-a-passo.md)

## Membros da equipe

Breno Oliveira Marinho, 499496, Design Digital

## Papéis ou tipos de usuário da aplicação

- Usuário não registrado
- Usuário registrado
- Administrador

## Entidades ou tabelas do sistema

- Usuário
- Postagem 
- Comentário

## Principais funcionalidades da aplicação
##Usuários Normais:
- Login e Registro
- Usuário registrado pode comentar nos foruns.
- Postar Comentários
- 
##Usuarios Admin:
- Login e Registro
- O adminstrador pode adicionar, remover e editar as postegens do forúm.
- Postar comentários

## Tecnologias e frameworks utilizados

**Frontend:**

- VueJS v3.0, Vue-Router.
- Axios

**Backend:**

- Strapi


## Operações implementadas para cada entidade da aplicação


| Entidade| Criação | Leitura | Atualização | Remoção |
| --- | --- | --- | --- | --- |
| Usuário | X | X |  |  |
| Postagem | X  | X |  X | X |
| Comentário | X |  X  |  |  |

> Lembre-se que é necessário implementar o CRUD de pelo menos duas entidades.

## Rotas da API REST utilizadas

| Método HTTP | URL |
| --- | --- |
| POST | /auth/local |
| GET | /users/me |
| GET | /api/mangas |
| GET | /api/mangas/{id} |
| POST | /api/mangas |
| PUT | /api/mangas/{id} |
| DELETE | /api/mangas/{id} |
