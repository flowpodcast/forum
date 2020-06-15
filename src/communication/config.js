  import {config} from 'firebaseConfig';
  import firebase from 'firebase';
  import {atualizarRankClient} from 'pages/Posts/index.js';
  import DOMPurify from 'dompurify';
  
  var post = '' ;
  var title = '' ;
  
  export const handleChange = function(value){
    post = value;
  }	
  export const handleTitleChange = function(value){
    title = value;
  }	  
  
  var userObject = JSON.parse(localStorage.getItem( 'userObject' ));
  const firebaseURL = config.databaseURL; //realtime database         
  var enc = new TextDecoder("utf-8"); //decodificar os posts recebidos como array
  
  export const postarNoForum = function() {
	var xhr = new XMLHttpRequest();// to criando um XMLHttpRequest por função pros onload não se atropelar*
	var configPurify = { ADD_TAGS: ['iframe'], KEEP_CONTENT: false, ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'] };
	 // não precisa conferir nada aqui porque é impossivel acessar isso sem estar logado	
    var postID=Math.floor(1000 + Math.random() * 9000); //colocar algo mais garantido que random
	xhr.open('PATCH', firebaseURL+'/Posts/'+postID+'/.json');
    var postJSON = { post : '', title: '', user: '', postID : '', date : '', rank : ''};
	//isso aqui dava pra ser uma classe só pro objeto e seria bem util dps
	postJSON = {post : ''};
	postJSON.post = DOMPurify.sanitize(post,configPurify);
	postJSON.title = title;
	postJSON.postID= postID;
	postJSON.rank = {}  //<-- isso aqui não devia acontecer, deveria ter uma forma melhor de instanciar toda essa bagunça
	postJSON.rank.count='0';
	postJSON.date = new Date().toLocaleDateString();
	postJSON.user = userObject.displayName; //identificar user dps...
	xhr.send(JSON.stringify(postJSON));
	xhr.onload = function () {window.location.href = "/"; /*trocar por algo mais solido como atualização de components.*/};
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
