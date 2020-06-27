export default class forumAPI {
  constructor(post, title, rank, user) {
    const date = new Date().toLocaleDateString();
    this.post = post;
	this.title = title;
	this.rank = {"count" : rank};
	this.date = date;
	this.user = user;
	this.asPOJO = JSON.stringify(this);
  }
  send(endereco,callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', endereco, false); //sempre vai ser POST porque o server que decide dps na hora de ir pro banco.
  xhr.onload = callback;
  xhr.send(this.asPOJO);
  }
}
