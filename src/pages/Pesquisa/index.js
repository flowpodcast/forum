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

  
export default function LandingPesquisa() {
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
		<ListaDePostsFiltrados/>
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


function ListaDePostsFiltrados() {
	loadForum();
	var location = useLocation();
	var pesquisa = localStorage.getItem("pesquisa");
    var pagina = location.pathname.split('/')[2];
	
	
	if(pagina === undefined) {
		pagina = 1; // só pra nao ocupar espaço mesmo...
		paginaInicial=0;
	}
	
	var paginaTotal = pagina*4;
	var paginaInicial = (pagina-1)*4;
	
	
    var Lista = Object.values(global.PostsList ?? new Array());// performance
	function Pagination() {
	if(global.PostsList !== null) {
		
		var pagination = Math.ceil(Lista.length/4);
	
		if(pagina>pagination)
			window.location.href = '/';
	
		const paginationLinks = [];
		for (var i = 1; i < pagination+1; i++) {
		paginationLinks.push(<a style={{ fontSize:"24px", color : "white", textDecoration: "none"}} href={`/Pesquisa/${i}`}>{i} </a>);
		}	
			return (<Alert className="hoverToGrayPagination" color="Dark">{paginationLinks}</Alert>);
		}
		else
		{
			return(<></>);
		}
	}
	
	function ListaDePostsInternal () {
	return (
	Lista.filter(x => x.title.includes(pesquisa)).sort((a,b)=>{ 
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
	
	if(Lista !== null)	
	{
	return (
	<>
	<center>
		<ListaDePostsInternal/>
		<Pagination/>
	</center>
	</>);
	}
	else
	{
		return ( <h1>Nada aqui...</h1>);
	}
}
