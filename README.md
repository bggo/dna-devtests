# MyDNA test

#### Observações
1. É utilizado o serviço de mensageria RabbitMQ. Nesse projeto foi usado um Docker com o RabbitMQ rodando no host local e na porta 8080.
2. Client e Server rodam em localhost, porta 3000 para o _Client_ e 8000 para o _Server_
3. São utilizadas as fonts **_Monserrat_** do diretório do [GoogleFonts](https://fonts.google.com/).
4. O projeto é composto por *Client* e *Servidor*, ambos estão neste repositório.

# Rodando o Projeto

#### &nbsp;&nbsp;&nbsp; 3. Subindo o servidor
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Para rodar o **Server**, use o comando:
```
$ yarn dev ou npm dev
```
#### &nbsp;&nbsp;&nbsp; 4. Subindo a Interface
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Para rodar o **Client**, use o comando:
 ```
 $ yarn start ou npm start
 ```
# Diagrama
O Diagrama para entendimento do projeto se encontra em:

&nbsp; https://www.figma.com/file/HIUbFxN29C2IfXVGOaWcoS/Diagrama?node-id=0%3A1


# Bibliotecas utlizadas
### Server
- Axios
- Cors
- Express
- amqplib

### Client
- Axios
- Node-sass
- React
- React-icons
- React-router-dom
