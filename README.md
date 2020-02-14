# To Do

 - [x] Cadastrar user
 - [x] Login
 - [x] Cadastrar address
 - [x] Listar categories
 - [x] Listar items de uma category
 - [x] Cadastrar items na basket
 - [x] Adicionar order na basket
 - [x] Listar items da basket
 - [x] Criar order
 - [ ] Processar payment
 - [ ] Atualizar order após payment "aprovado"
 
# Descrição

   - Implementação dos microserviços que compõem o sistema Lav, tema do TCC da Pós Graduação em Arquitetura de Software Distribuído na IGTI.

   - Implementation of the microservices that make up the Lav system, theme of the Postgraduate Course in Distributed Software Architecture at IGTI.

# Dependências

  - Node JS ^12.0.0 
  - MongoDB
  - RabbitMQ

  - Todas as depêndencias podem ser containers docker. Utilizo apenas o RabbitMQ no docker, porém as nada impede de utilizar para as demais dependências. No desenvolvimento, foi utilizado MongoDB Cloud no http://www.mlab.com.

  - All dependencies can be docker containers. I only use RabbitMQ in the docker, but nothing prevents them from being used for other dependencies. In the development, MongoDB Cloud was used at http://www.mlab.com.

# Start

  - run ``` yarn ``` to install all dependencies inside each microservice folder
  - initialize rabbitmq server on docker
    ```
    docker-compose up -d

    or

    docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
    ```
  - copy .env.example file to .env and update the variable values
  - run ``` yarn dev ``` to start each of microservices
  - run ``` yarn dev ``` to start api gateway

  The aplication will run on http://localhost:3000

# Microservices ports

  - Api Gateway: 3000
  - User: 3001
  - Category: 3002
  - Item: 3003
  - Order: 3004
  - Notification: 3005
  - Address: 3006
  - Basket: 3007