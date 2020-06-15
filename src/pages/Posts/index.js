import React from 'react';

import Banner from 'assets/imgs/BannerFlow.png';
import Navbar from 'components/Navbar';
import {loadPost, updatePostRank} from 'communication/config.js';
import {useLocation} from "react-router-dom";
import {
  DivBanner,
  Chat,
} from './styles';

var postID = null;

function updatePostRankClient(postID) {
updatePostRank(postID);
}

export const atualizarRankClient = function(RankAtual) {
var botao = document.getElementById("avaliaButton");
var numOriginal = botao.innerHTML.match(/\d+/)[0];
botao.innerHTML= botao.innerHTML.replace(numOriginal,RankAtual);
}

export default function Posts() {
var location = useLocation();
postID = location.pathname.split('/')[2];
loadPost(postID); //chama um post especifico, essa pagina nao deve abrir se o usuario acessar um perfil
if(global.PostsList['selectedPost'] === null)
{
	return (<> <center><h1 style={{color:"White"}}>Erro: Post não existe.</h1></center> </>);
}
else
{
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
          <div dangerouslySetInnerHTML={{__html: global.PostsList['selectedPost'].post}} className="post">
		  </div>
		</center>
		</div>
        </div>
        <div className="group-infos">
          <aside className="advertisement">advertisement rapá <button id="avaliaButton" onClick={() => updatePostRankClient(`${postID}`)}>↑ {global.PostsList['selectedPost'].rank.count} Avaliar Post</button></aside>
		  
        </div>

      </Chat>

    </>

  );
}
}
