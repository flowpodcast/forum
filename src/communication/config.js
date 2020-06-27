  import {config} from 'serverConfig';
  import firebase from 'firebase';
  import {atualizarRankClient} from 'pages/Posts/index.js';
  import DOMPurify from 'dompurify';
  import forumAPI from 'communication/gerenciadorHttp.js';
  
  var post = '' ;
  var title = '' ;
  
  
  var userObject = JSON.parse(localStorage.getItem( 'userObject' ));
  const firebaseURL = config.databaseURL; //realtime database         
  var enc = new TextDecoder("utf-8"); //decodificar os posts recebidos como array
  
  export const postarNoForum = function(post,titulo) { 
	var configPurify = { ADD_TAGS: ['iframe'], KEEP_CONTENT: false, ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'] };
	var endereco = Url().posts;
    var postJSON = new forumAPI(post,titulo,'0',userObject.displayName);
	var callback = function () {window.location.href = window.location.href; /*trocar por algo mais solido como atualização de components.*/};
	postJSON.send(endereco,callback);
  }
  
  export const responderForum = function(postID,post,titulo) {
	var configPurify = { ADD_TAGS: ['iframe'], KEEP_CONTENT: false, ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'] };
    var postJSON = new forumAPI(post,titulo,'0',userObject.displayName);
	var endereco = Url(postID).respostas;
	var callback = function () {window.location.href = window.location.href; /*trocar por algo mais solido como atualização de components.*/};
	postJSON.send(endereco,callback);
	
  }
  
  global.AnswerList = [];
  export const loadAnswers = function(postID) { //carrega todos os posts(que serao futuramente os mais recentes/populares)
	Get(Url(postID).respostas,function(response){
		var json = JSON.parse(JSON.parse(response).data); //sera que isso é um problema de performance?
		global.AnswerList = json; //coloca todos os posts na raiz do banco; numa variavel global.
	});
  }
  
  
  export const updatePostRank = function(postID) {
  Get(Url(postID).rank,function(response){ //n implementei AINDA 12345678987654321`1234567898765432123456787654321
		var json = JSON.parse(JSON.parse(response).data);
		atualizarRankClient(parseInt(json)); //coloca todos os posts na raiz do banco; numa variavel global.
	});
  }

  global.PostsList = [];
  export const loadPost = function(id) { 
    Get(Url(id).singlePost,function(response){
		global.PostsList['selectedPost'] = JSON.parse(JSON.parse(response).data); //coloca todos os posts na raiz do banco; numa variavel global.
	});
  }
  
  export const loadForum = function() { //carrega todos os posts(que serao futuramente os mais recentes/populares)
	Get(Url().posts,function(response){
		var json = JSON.parse(JSON.parse(response).data); //sera que isso é um problema de performance?
		global.PostsList = json; //coloca todos os posts na raiz do banco; numa variavel global.
	});
  }

  function Get(url,callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.onload = function() {
  callback(xhr.responseText);
  //global.PostsList['selectedPost'] = JSON.parse(JSON.parse(xhr.responseText).data);
  };
  xhr.send();
  }
  
  function Url(PostID) {
  return {
   posts : PostUrl(),
   singlePost : PostUrl(PostID),
   respostas : RespostaUrl(PostID),
   rank : RankUrl(PostID)
  };
  }
  
  function PostUrl(PostID) {
  	if(PostID){
  	return config.url+"/ForumPost/singlePost/"+PostID;	
  	}
  return config.url+"/ForumPost/postList/";
  }  
  
  function RespostaUrl(PostID) {
  return config.url+"/ForumPost/singlePost/"+PostID+"/Answers";	  
  }
  
  function RankUrl(PostID) {
  return config.url+"/ForumPost/singlePost/"+PostID+"/UpdateRank";
  }