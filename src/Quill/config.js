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
  var post = '' ;
  var title = '' ;
  export const handleChange = function(value){
    post = value;
  }	
  export const handleTitleChange = function(value){
    title = value;
  }	  
  var xhr = new XMLHttpRequest();
  const firebaseURL = "https://flowrumpodcast.firebaseio.com/"; //realtime database
  var enc = new TextDecoder("utf-8"); //decodificar os posts recebidos como array
  export const postarNoForum = function() {
  
	xhr.open('PUT', firebaseURL+'GianlucaJux/'+'/.json');
    var postJSON = {};
	postJSON[title] = {post : ''};
	postJSON[title].post=post;
	xhr.send(JSON.stringify(postJSON));
  }
  global.Posts = { post : ''};
  global.PostsList = [];
  export const loadPost = function(user, titulo) { 
    xhr.open("GET", firebaseURL+user+'/'+titulo+'/.json', false); //pegar nome do user dps.
	//xhr.responseType = "arraybuffer";
	xhr.onload = function(e) {
    //var arraybuffer = xhr.response; // não é responseText
	console.log(JSON.parse(xhr.responseText));
	global.Posts.post = JSON.parse(xhr.responseText).post;//pega um post especifico
    
	}
	xhr.send();
  }
  export const loadForum = function() { //carrega todos os posts(que serao futuramente os mais recentes/populares)
  
  xhr.open("GET", firebaseURL+'/.json',false);
  xhr.onload = function(e) {
    //var arraybuffer = xhr.response; // não é responseText
	var json = JSON.parse(xhr.responseText);
	global.PostsList = Object.keys(json).map(i => json );//pega um post especifico
	console.log(global.PostsList);
	}
	xhr.send();
  }
