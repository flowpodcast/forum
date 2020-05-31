  //so pra nao ficar botando as opcoes do quill tudo enfiado no index.js
  export const formats = [
			'font','size',
            'bold', 'italic', 'underline',
            'list', 'bullet', 'indent',
            'link', 'image', 'video'
        ];
  export const toolbarOptions = [
            [{ 'font': [] }],
			[{'size': []}],
			['bold', 'italic', 'underline'],        // toggled buttons

            [{'list': 'ordered'}, {'list': 'bullet'}],
            ['link', 'image', 'video'],

            //['clean']                                         // remove formatting button
        ];
  export const historic = {
            delay: 2000,
            maxStack: 500,
            userOnly: true
        };
		
  // daqui para baixo poderia ser outro arquivo...
  var post = '' ;
  var title = '' ;
  export const handleChange = function(value){
    post = value;
  }	
  export const handleTitleChange = function(value){
    title = value;
  }	  
  var xhr = new XMLHttpRequest();
  const firebaseURL = "{URL DE UM REALTIME DATABASE DO FIREBASE COM REGRAS DE DEBUG}"; //realtime database
  var enc = new TextDecoder("utf-8"); //decodificar os posts recebidos como array
  export const postarNoForum = function() {
	  
    var postID=Math.floor(1000 + Math.random() * 9000); //colocar algo mais garantido que random
	xhr.open('PATCH', firebaseURL+'Posts/'+postID+'/.json');
    var postJSON = { post : '', title: '', user: '', id : postID};
	postJSON = {post : ''};
	postJSON.post = post;
	postJSON.title = title;
	postJSON.user = "GianlucaJux" //identificar user dps...
	xhr.send(JSON.stringify(postJSON));
  }
  
  global.PostsList = [];
  export const loadPost = function(id) { 
    xhr.open("GET", firebaseURL+'Posts/'+id+'/.json', false);
	xhr.onload = function(e) {
	//console.log(JSON.parse(xhr.responseText));
	global.PostsList['selectedPost'] = JSON.parse(xhr.responseText);//pega um post especifico baseado no id na URL e salva numa variavel global que representa o post aberto(nao sei se da conflito com varios usuarios ao mesmo tempo)
    
	}
	xhr.send();
  }
  
  export const loadForum = function() { //carrega todos os posts(que serao futuramente os mais recentes/populares)
  
  xhr.open("GET", firebaseURL+'Posts'+'/.json',false);
  xhr.onload = function(e) {
	var json = JSON.parse(xhr.responseText);
	global.PostsList = json; //coloca todos os posts na raiz do banco; numa variavel global.
	}
	xhr.send();
  }
