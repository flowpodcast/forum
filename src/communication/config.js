  import {config} from 'firebaseConfig';
  import firebase from 'firebase';
  import {atualizarRankClient} from 'pages/Posts/index.js';
  import DOMPurify from 'dompurify';
  import forumPost from 'communication/gerenciadorHttp.js';
  
  var post = '' ;
  var title = '' ;
  
  
  var userObject = JSON.parse(localStorage.getItem( 'userObject' ));
  const firebaseURL = config.databaseURL; //realtime database         
  var enc = new TextDecoder("utf-8"); //decodificar os posts recebidos como array
  
  export const postarNoForum = function(post,titulo) {
	  
	var configPurify = { ADD_TAGS: ['iframe'], KEEP_CONTENT: false, ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'] };
	 // não precisa conferir nada aqui porque é impossivel acessar isso sem estar logado	
    var postID = Math.floor(1000 + Math.random() * 9000); //colocar algo mais garantido que random
	var endereco = firebaseURL+'/Posts/'+postID+'/.json';
	
    var postJSON = new forumPost(post,titulo,postID,'0',userObject.displayName);
	
	var callback = function () {window.location.href = window.location.href; /*trocar por algo mais solido como atualização de components.*/};
	postJSON.send('PATCH',endereco,callback);
  }
  
  export const responderForum = function(postID,post,titulo) {
	var configPurify = { ADD_TAGS: ['iframe'], KEEP_CONTENT: false, ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'] };
	
	var answerID = Math.floor(1000 + Math.random() * 9000); //colocar algo mais garantido que random
	//xhr.open('PATCH', );
    var postJSON = new forumPost(post,titulo,postID,'0',userObject.displayName);
	var endereco = firebaseURL+'/Respostas/'+postID+'/'+answerID+'/.json';
	var callback = function () {window.location.href = window.location.href; /*trocar por algo mais solido como atualização de components.*/};
	postJSON.send('PATCH',endereco,callback);
	
  }
  
    global.AnswerList = [];
    export const loadAnswers = function(postID) { //carrega todos os posts(que serao futuramente os mais recentes/populares)
    var xhr = new XMLHttpRequest();
    xhr.open("GET", firebaseURL+'/Respostas/'+postID+'/.json',false);
    xhr.onload = function(e) {
	var json = JSON.parse(xhr.responseText);
	global.AnswerList = json; //coloca todos os posts na raiz do banco; numa variavel global.
	}
	xhr.send();
  }
  
  
  export const updatePostRank = function(postID) {
  var xhr = new XMLHttpRequest(); //*
  var RankAtual=0;	  
  xhr.open('GET', firebaseURL+'/Posts/'+postID+'/rank/.json',true);
  xhr.send();
  xhr.onload = function(e) {
  RankAtual = JSON.parse(xhr.responseText).count;
  updatePostRankInternal(RankAtual,postID);
  }
}
  
  function updatePostRankInternal(RankAtual,postID) {
  var xhr = new XMLHttpRequest(); // * Prática cancerigena, alguem muda isso daqui.
  xhr.open('PATCH', firebaseURL+'/Posts/'+postID+'/.json');
  xhr.send('{"rank" : { "count": "'+(parseInt(RankAtual)+1).toString()+'","likedBy" : {"'+userObject.localId+'" : "true"}}}'); 
  xhr.onload = function () {
  if(JSON.parse(xhr.responseText).error === undefined) //se na hora de dar upvote a validação falhar pq ja tinha upvote ignore a parte de mudar pro client
	  atualizarRankClient(parseInt(RankAtual)+1);
  }
  
}
  
	//cloud firestore
    //export const postarNoForum = function() {
	//var userObject = JSON.parse(localStorage.getItem( 'userObject' ));
	//var postID=Math.floor(1000 + Math.random() * 9000); //colocar algo mais garantido que random
  	//var app = firebase.initializeApp(config);
    //var db = firebase.firestore(app);
    //    //firebase.firestore.setLogLevel("debug");
	//	db.collection("Posts").doc(postID.toString()).set({
    //    title: title,
    //    post: post,
    //    user: userObject.displayName
	//    })
	//    .then(function() {
    //    window.location.reload(false);
    //    })
	//	.catch(function(error) {
    //    console.error("Error writing document: ", error);
	//	});
	//}
  
  global.PostsList = [];
  export const loadPost = function(id) { 
    var xhr = new XMLHttpRequest();
    xhr.open("GET", firebaseURL+'/Posts/'+id+'/.json', false);
	xhr.onload = function(e) {
	//console.log(JSON.parse(xhr.responseText));
	global.PostsList['selectedPost'] = JSON.parse(xhr.responseText);//pega um post especifico baseado no id na URL e salva numa variavel global que representa o post aberto(nao sei se da conflito com varios usuarios ao mesmo tempo)
    
	}
	xhr.send();
  }
  
  export const loadForum = function() { //carrega todos os posts(que serao futuramente os mais recentes/populares)
  var xhr = new XMLHttpRequest();
  xhr.open("GET", firebaseURL+'/Posts'+'/.json',false);
  xhr.onload = function(e) {
	var json = JSON.parse(xhr.responseText);
	global.PostsList = json; //coloca todos os posts na raiz do banco; numa variavel global.
	}
	xhr.send();
  }
