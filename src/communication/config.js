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
  var xhr = new XMLHttpRequest();
  const firebaseURL = config.databaseURL; //realtime database         
  var enc = new TextDecoder("utf-8"); //decodificar os posts recebidos como array
  
  export const postarNoForum = function() {
	var configPurify = { ADD_TAGS: ['iframe'], KEEP_CONTENT: false, ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'] };
	var userObject = JSON.parse(localStorage.getItem( 'userObject' )); // não precisa conferir nada aqui porque é impossivel acessar isso sem estar logado	
    var postID=Math.floor(1000 + Math.random() * 9000); //colocar algo mais garantido que random
	xhr.open('PATCH', firebaseURL+'/Posts/'+postID+'/.json');
    var postJSON = { post : '', title: '', user: '', postID : '', date : '', rank: '0'};
	postJSON = {post : ''};
	postJSON.post = DOMPurify.sanitize(post,configPurify);
	postJSON.title = title;
	postJSON.postID= postID;
	postJSON.rank= '0';
	postJSON.date = new Date().toLocaleDateString();
	postJSON.user = userObject.displayName; //identificar user dps...
	xhr.send(JSON.stringify(postJSON));
	xhr.onload = function () {window.location.href = "/"; /*trocar por algo mais solido como atualização de components.*/};
  }
  
  export const updatePostRank = function(postID) {
  var RankAtual=0;	  
  xhr.open('GET', firebaseURL+'/Posts/'+postID+'/.json',true);
  xhr.send();
  xhr.onload = function(e) {
  RankAtual= JSON.parse(xhr.responseText).rank;
  updatePostRankInternal(RankAtual,postID);
  }
  
  }
  
  function updatePostRankInternal(RankAtual,postID) {
  var xhr2 = new XMLHttpRequest(); // Prática cancerigena, alguem muda isso daqui.
  xhr2.open('PATCH', firebaseURL+'/Posts/'+postID+'/.json');
  xhr2.send('{"rank" :"'+(parseInt(RankAtual)+1).toString()+'"}'); 
  atualizarRankClient(parseInt(RankAtual)+1);
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
    xhr.open("GET", firebaseURL+'/Posts/'+id+'/.json', false);
	xhr.onload = function(e) {
	//console.log(JSON.parse(xhr.responseText));
	global.PostsList['selectedPost'] = JSON.parse(xhr.responseText);//pega um post especifico baseado no id na URL e salva numa variavel global que representa o post aberto(nao sei se da conflito com varios usuarios ao mesmo tempo)
    
	}
	xhr.send();
  }
  
  export const loadForum = function() { //carrega todos os posts(que serao futuramente os mais recentes/populares)
  
  xhr.open("GET", firebaseURL+'/Posts'+'/.json',false);
  xhr.onload = function(e) {
	var json = JSON.parse(xhr.responseText);
	global.PostsList = json; //coloca todos os posts na raiz do banco; numa variavel global.
	}
	xhr.send();
  }
