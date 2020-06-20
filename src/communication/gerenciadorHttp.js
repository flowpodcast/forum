export default class forumPost {
  constructor(post, title, postID, rank, user) {
    const date = new Date().toLocaleDateString();
    this.post = post;
	this.title = title;
	this.postID = postID;
	this.rank = {"count" : rank};
	this.date = date;
	this.user = user;
	this.asPOJO = JSON.stringify(this);
  }
  send(tipo,endereco,callback) {
  var xhr = new XMLHttpRequest();
  xhr.open(tipo, endereco);
  xhr.send(this.asPOJO);
  xhr.onload = callback;
  }
}
