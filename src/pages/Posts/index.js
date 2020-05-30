import React from 'react';

import Banner from '../../assets/imgs/BannerFlow.png';
import Navbar from '../../components/Navbar';
import {post} from '../../Quill/config.js';
import {
  DivBanner,
  Chat,
} from './styles';

export default function Posts() {
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
          <div className="groups">
		  {post.text} //xupingar do firebase
		  </div>
        </div>
        <div className="group-infos">
          <aside className="advertisement">advertisement rapá</aside>
        </div>

      </Chat>

    </>

  );
}
