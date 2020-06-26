# Conectando com o servidor para comunicar com o banco #

Esta parte do projeto é basicamente apenas o front end do fórum, para o fórum ser funcional, com login, upload de posts etc... é necessário
hospedar e se comunicar com um servidor que funciona como um middleware para o firebase.

Após ter o servidor online (verifique o projeto forum-api), crie um arquivo serverConfig.js na raiz do projeto (src), cole este trecho:

> export const config = {
> 	url: ""
> };	

Dentro das aspas em url, cole o url do servidor.
