import React from 'react';

import Banner from 'assets/imgs/BannerFlow.png';
import Navbar from 'components/Navbar';
import {loadPost, updatePostRank, loadAnswers} from 'communication/config.js';
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

function Answers() {
	var data1=0;
	var data2=0;
	if(global.AnswerList !== null)
	{
	return (Object.values(global.AnswerList).sort((a,b)=>{
		
		var data1 = a.date;
		var data2 = b.date
		
             return data2>data1 ? -1 : data2<data1 ? 1 : 0;
          }).map(Post => 
	
		  <>
		  <div className="groups">
		  <aside style={{float:"left",width:"20%", height:"620px",color: "white"}} className="infos">
			<center>
			<figure/>
			{Post.user}
			</center>
		  </aside>
		  <center>
		  <div dangerouslySetInnerHTML={{__html: Post.post}} className="post"> 
		  
		  </div>
		  </center>
		  </div>
		  </>
		  )
	);
	}
	else
	{
		return (<></>);
	}
}

export default function Posts() {
var location = useLocation();
postID = location.pathname.split('/')[2];
loadAnswers(postID);	
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
		<aside style={{float:"left",width:"20%", height:"620px",color: "white"}} className="infos">
		<center>
		<figure/>
		{global.PostsList['selectedPost'].user}
		</center>
		</aside>
		<center>
		<div dangerouslySetInnerHTML={{__html: global.PostsList['selectedPost'].post}} className="post">
		</div>
		</center>
		</div>
		<Answers/>
		
        </div>
        <div className="group-infos">
          <aside className="advertisement">advertisement rapá <button id="avaliaButton" onClick={() => updatePostRankClient(`${postID}`)}>↑ {global.PostsList['selectedPost'].rank.count} Avaliar Post</button></aside>
		  <aside className="infos" />
        </div>

      </Chat>

    </>

  );
}
}
