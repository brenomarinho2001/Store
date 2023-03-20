# Fórum

Uma Fórum para formando se comunicarem com profissionais.

Para executar este projeto siga os passos descritos no arquivo [passo-a-passo](passo-a-passo.md)

## Membros da equipe

Breno Oliveira Marinho, 499496, Design Digital, Antônio Fernando de Araújo Costa - 494422 - Engenharia de Software 

## Papéis ou tipos de usuário da aplicação

- Usuário não registrado
- Usuário registrado
- Administrador

## Entidades ou tabelas do sistema

- Usuário
- Postagem 
- Comentário

## Principais funcionalidades da aplicação

- Usuário não registrado poderá ver as postagens mas não pode participar das postagens.
- Usuário registrado pode comentar nos foruns e mudar seu nome. 
- O adminstrador pode adicionar, remover e editar as postegens do forúm.

## Tecnologias e frameworks utilizados

**Frontend:**

- VueJS v3.0, Vue-Router e Pinia.
- Axios

**Backend:**

- Strapi


## Operações implementadas para cada entidade da aplicação


| Entidade| Criação | Leitura | Atualização | Remoção |
| --- | --- | --- | --- | --- |
| Usuário |  |  |  |  |
| Postagem | X  | X |  X | X |
| Comentário | X |  X  | X | X |

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
