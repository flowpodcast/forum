# Usando o Firebase como Banco de dados #

Crie um projeto no site do firebase, na parte database selecione realtime database e copie o link.

Altere a constante firebaseURL no arquivo [config.js](config.js) para o link copiado. (sem os caracteres {}).

No firebase, na pagina database selecione regras e troque read e write para true(isso tira todas as seguranças do banco para poder ser utilizado em ambiente de testes)

O sistema estrutura o banco automáticamente, então basta fazer isso e acompanhar o banco.