# Usando o Firebase como Banco de dados #

Crie um projeto no site do firebase, na parte database selecione realtime database e copie o link.

Altere a constante firebaseURL no arquivo [config.js](config.js) para o link copiado. (sem os caracteres {}).

No firebase, na pagina database selecione regras e troque read e write para true(isso tira todas as seguranças do banco para poder ser utilizado em ambiente de testes)

O sistema estrutura o banco automáticamente, então basta fazer isso e acompanhar o banco.

# Usando o Firebase para Autenticação email/senha #

O Primeiro passo para permitir o cadastro e login com email e senha é importar as configurações do seu web app firebase.
(Obs. é possível que mesmo com o hosting configurado o firebase não tenha um web app)

No console do firebase clique nas configurações do projeto do lado de "Visão geral do projeto".

Em "seus aplicativos" se não tiver um web app crie-o. Caso já tenha um web app copie o firebaseConfig 
na opção radio Configuração do Firebase SDK snippet, cole em um arquivo nomeado firebaseConfig.js na raiz do projeto (src).
