[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/rFLCC26F)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15572111&assignment_repo_type=AssignmentRepo)


# Tela de Login - Projeto em Grupo

Este projeto é uma tela de login desenvolvida como parte de um projeto em grupo. A página permite que os usuários insiram suas credenciais e façam login, redirecionando-os para a página inicial se as credenciais forem válidas. Os dados dos usuários são armazenados no `localStorage`.

## Estrutura do Projeto

- **HTML**: Estrutura básica da página de login.
- **CSS**: Estilização da página .
- **JavaScript**: Manipulação de eventos do formulário, verificação de credenciais e redirecionamento.

## Arquivos

1. **index.html**:
    - Contém a estrutura básica da página de login.
    - Inclui dois campos de entrada: um para e-mail e outro para senha.
    - Inclui um botão para enviar o formulário.
    - Referencia um arquivo CSS externo (`login.css`) para estilização.
    - Carrega um script JavaScript (`login.js`) para lidar com a lógica de login.

2. **login.js**:
    - Manipula o evento de submissão do formulário.
    - Verifica as credenciais do usuário comparando com os dados armazenados no `localStorage`.
    - Redireciona para `home.html` se o login for bem-sucedido.
    - Exibe uma mensagem de erro se as credenciais forem inválidas.
    - Impede que o usuário cole texto no campo de senha para aumentar a segurança.