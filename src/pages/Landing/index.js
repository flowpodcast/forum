import React from 'react';

import Banner from '../../assets/imgs/BannerFlow.png';
import Navbar from '../../components/Navbar';
import {loadForum} from '../../Quill/config.js';
import {
  DivBanner,
  Chat,
} from './styles';

export default function Landing() {
loadForum();
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
		  {Object.values(global.PostsList).map(Post =>
		  <>
		  <a href={`/Posts/${Post.postID}`}>{Post.title}</a>
		  <br/>
		  </>
		  )}
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
