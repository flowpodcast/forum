import React from 'react';

import Banner from '../../assets/imgs/BannerFlow.png';
import Navbar from '../../components/Navbar';
import {loadPost} from '../../Quill/config.js';
import {useLocation} from "react-router-dom";
import {
  DivBanner,
  Chat,
} from './styles';

export default function Posts() {
var location = useLocation();
console.log(location.pathname.split('/')[2],location.pathname.split('/')[3]);
loadPost(location.pathname.split('/')[2],location.pathname.split('/')[3]); //chama um post especifico, essa pagina nao deve abrir se o usuario acessar um perfil
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
		<center>
          <div dangerouslySetInnerHTML={{__html: global.Posts.post}} className="post">
		  </div>
		</center>
		</div>
        </div>
        <div className="group-infos">
          <aside className="advertisement">advertisement rapá</aside>
        </div>

      </Chat>

    </>

  );
}
