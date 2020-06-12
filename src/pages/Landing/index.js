import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'reactstrap';
import Banner from 'assets/imgs/BannerFlow.png';
import Navbar from 'components/Navbar';
import {loadForum} from 'communication/config.js';
import {
  DivBanner,
  Chat,
} from './styles';

  
export default function Landing() {
return (
	 <>
      <Navbar />
      <DivBanner>
        <img src={Banner} alt="Flow Podcast" />
        <div className="div-group">
          <figure />
          <h5>Flow</h5>
          <button>JOIN</button>
        </div>
      </DivBanner>
      <Chat>
        <div className="group-container">
          <div className="search-groups" />	  
          <div id="posts" className="groups">
		<ListaDePosts/>
		  </div> 
        </div>
        <div className="group-infos">
          <aside className="infos" />
          <aside className="advertisement">advertisement rapá</aside>
        </div>

      </Chat>

    </>

  );
}

function openPost(postID) {
	window.location.href = `/Posts/${postID}`;
}	


function ListaDePosts() {
	loadForum();

	if(global.PostsList !== null) {
	return (
	Object.values(global.PostsList).sort((a,b)=>{
             return parseInt(b.rank)  - parseInt(a.rank);
          }).map(Post =>
	
		  <>
		  <center>
		  <Alert className="hoverToGray" onClick={() => openPost(Post.postID)} color="Dark">
		  <a href="#" style={{textDecoration : "none"}} className="alert-link">{Post.title}</a>
		  <p style={{float: "right", display: "inline-block", color : "white"}}>| Avaliação: {Post.rank} | {Post.user} ({Post.date})</p>
		  </Alert>
		  </center>
		  </>
		  ));
		 
	}
	return ( <h1>Nada aqui...</h1>);
}
