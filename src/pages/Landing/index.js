import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'reactstrap';
import Banner from 'assets/imgs/BannerFlow.png';
import Navbar from 'components/Navbar';
import {useLocation} from "react-router-dom";
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
	var location = useLocation();
    var pagina = location.pathname.split('/')[1];
	
	if(pagina.toString().length>1)
		window.location.href = '/';
	
	if(pagina.toString().length == 0 || pagina=="1")
		pagina = 1; // só pra nao ocupar espaço mesmo...
		paginaInicial=0;
	
	var paginaTotal = pagina*4;
	var paginaInicial = (pagina-1)*4;
	
	
	
	if(global.PostsList !== null) {
	var Lista = Object.values(global.PostsList); // performance
	var pagination = Math.ceil(Lista.length/4);
	
	function Pagination() {
	const paginationLinks = [];
	for (var i = 1; i < pagination; i++) {
	paginationLinks.push(<a style={{ fontSize:"24px", color : "white", textDecoration: "none"}} href={i}>{i} </a>);
	}	
	return (<Alert className="hoverToGrayPagination" color="Dark">{paginationLinks}</Alert>);
	}
	
	function ListaDePostsInternal () {
	return (
	Lista.sort((a,b)=>{ //pratica ruim porem transforma o server numa maquina de queries temporariamente enquanto usamos realtime database
             return parseInt(b.rank.count)  - parseInt(a.rank.count);
          }).slice(paginaInicial,paginaTotal).map(Post => 
	
		  <>
		  <Alert className="hoverToGray" onClick={() => openPost(Post.postID)} color="Dark">
		  <a href="#" style={{textDecoration : "none"}} className="alert-link">{Post.title}</a>
		  <p style={{float: "right", display: "inline-block", color : "white"}}>| Avaliação: {Post.rank.count} | {Post.user} ({Post.date})</p>
		  </Alert>
		  </>
		  )
		);
	}
	
	return (
	<>
	<center>
		<ListaDePostsInternal/>
		<Pagination/>
	</center>
	</>);
	}
	return ( <h1>Nada aqui...</h1>);
}
