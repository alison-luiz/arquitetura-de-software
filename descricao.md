# Documento de Requisitos - Aplicação Web de Estacionamento

## 1. Definição do Produto

Aplicação Web para gerenciar setores de um estacionamento, incluindo funcionalidades como relatórios financeiros, cadastro de mensalistas, controle de acesso e veículos.

## 2. Organização dos Componentes do Projeto

### O projeto será organizado da seguinte forma:

    src/
    ├── controllers/
    │   ├── users.controller.ts
    ├── models/
    │   ├── user.entity.ts
    ├── views/
    │   ├── index.html
    ├── shared/
    │   ├── database/
    │   │   ├── config.database.ts
    ├── main.ts
    ├── app.module.ts

## 3. Requisitos do Sistema

### Requisitos Funcionais:

- **Criação de usuário**
- **Relatório Financeiro**
- **Cadastro de Mensalistas**
- **Controle de Acesso**
- **Cadastro de Veículo**

### Requisitos Não Funcionais:

- **Melhorar tempo de resposta do servidor**
- **Mecanismo de autenticação**
- **Manutenibilidade**

## 4. Restrições e Condições

### Restrições Técnicas:

- **IDE**: Visual Studio Code
- **Database**: PostgreSQL
- **Framework - Backend**: NestJS
- **Framework - Frontend**: Next.js, Redux e React
- **Test**: Jest
- **Deploy**: AWS, Digital Ocean, Azure, Oracle

### Restrições Não Técnicas:

- **Kanban**
- **Scrum**

## 5. Necessidades dos Stakeholders:

- **Gestor de Estacionamento**: Sistema para gerenciar setores, como: financeiro, clientes e relatórios.

## 6. Tendências Tecnológicas:

- **Framework - Backend**: NestJS
- **Framework - Frontend**: Next.js, Redux e React
- **Keycloak**: Para autenticação e controle de acesso

## 7. Riscos do Projeto:

- **Tratamento com testes utilizando Jest**
- **Avaliação de Servidor**: Testar desempenho e otimização
