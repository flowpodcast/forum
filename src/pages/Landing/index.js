import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'reactstrap';
import Banner from 'assets/imgs/BannerFlow.png';
import Navbar from 'components/Navbar';
import {loadForum} from 'Quill/config.js';
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

function ListaDePosts () {
	loadForum();
	if(global.PostsList !== undefined) {
	return (
	Object.values(global.PostsList).map(Post =>
		  <>
		  <center>
		  <Alert color="Dark">
		  <a href={`/Posts/${Post.postID}`} className="alert-link">{Post.title} | {Post.user}</a>
		  </Alert>
		  <br/>
		  </center>
		  </>
		  ));
		 
	}
	return ( <h1>Nada aqui...</h1>);
}
