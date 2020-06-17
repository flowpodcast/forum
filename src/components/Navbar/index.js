import React, { useState } from 'react';

import {useLocation} from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoPencil } from 'react-icons/go';
import { FaTimesCircle } from 'react-icons/fa';
import { FaFileImport } from 'react-icons/fa'; 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import {formats, toolbarOptions, historic} from 'Quill/config.js';
import {handleChange, handleTitleChange, postarNoForum, responderForum} from 'communication/config.js';
import { ReactComponent as Logo } from 'assets/logo/FlowLogo.svg';
import {
  Header, MenuPersonal, HamburguerMenu, PostModal, PostModalContent, EstiloResponsividade
} from './styles';

function HamburguerMenuContent() { //isso aqui podia ser um novo arquivo com todos os "contents" ---------------------
return ( 
<>
<center> {/*me julgue, o margin auto não foi.*/}
	<h2>
		<a href="/Cadastro">Cadastro</a>
	</h2>
</center>
</>
);
}

var contexto = "Escreva seu Post.";
var userObject = { displayName: "" }; //lazy loading
if(localStorage.getItem( 'userObject' )!==undefined && JSON.parse(localStorage.getItem( 'userObject' ))!==null)
{
	userObject= JSON.parse(localStorage.getItem( 'userObject' ));
	loggedIn = true;
}
else {
var loggedIn = false;
}

function UserDisplay (){
	return (	
	<>
	<figure/>
	<div className="personal-infos">
			<span>{userObject.displayName}</span>
		<div className="info-level">
			<AiFillStar className="level-ico" />
			<span>2250 KD</span>
		</div>
	</div>
	{/*o details e a setinha não estão aqui por causa de um problema de arquitetura, como tudo isso não está sendo renderizado por uma classe, não tem como eu colocar o details antes do handlePersonalMenu ser definido */}
	</>
	);
}

//----------------------------------------------------------------------

function Navbar() {
  const location = useLocation();
  const [hamburguerMenuIsOpen, setHamburguerMenuIsOpen] = useState(false);
  const [personalMenuIsOpen, setPersonalMenuIsOpen] = useState(false);
  const [postModalIsOpen, setPostModalIsOpen] = useState(false);


  function handleHamburguerMenu() {
    //const details = document.getElementById('details');

    //if (details.open) details.open = false; obsoleto
	IMenuIsOpen(setHamburguerMenuIsOpen, hamburguerMenuIsOpen); 
  }

  function handlePersonalMenu() {
	IMenuIsOpen(setPersonalMenuIsOpen, personalMenuIsOpen); 
  }
  
  function handlePostModal(e) {
	IMenuIsOpen(setPostModalIsOpen, postModalIsOpen);  
  }
  

  function IMenuIsOpen(menuToOpen,originalState) { //o param menuToOpen deve ser a bool constante do menu que sera aberto e trocado pra true
  // o param originalState é a bool antes de ser alterada, para verificar se um menu já esta aberto e precisa ser fechado
	setPersonalMenuIsOpen(false);
	setHamburguerMenuIsOpen(false);
	setPostModalIsOpen(false);
	menuToOpen(!originalState);
  }
  const [titleInput, setTitleInput] = useState('');
  const [quillInput, setQuillInput] = useState('');
  
 function inputChangeHandler(event) {
    setTitleInput(event.target.value);
  }
   function quillChangeHandler(value) {
    setQuillInput(value);
  }
  
  function IPostarNoForum () {
  postarNoForum(quillInput,titleInput);
  IMenuIsOpen(setPostModalIsOpen, postModalIsOpen);
  }
  
  function IResponderForum () {
  var postID= location.pathname.split('/')[2];
  responderForum(postID,quillInput,titleInput);
  IMenuIsOpen(setPostModalIsOpen, postModalIsOpen);
  }
	  
  function Enviar() {
	if(location.pathname.split('/')[1] == "Posts") {
		return (
		<h4 className="upload-ico" onClick={IResponderForum}>Responder <FaFileImport /></h4>
		);
	}
	else
	{
		return (
		<h4 className="upload-ico" onClick={IPostarNoForum}>Enviar <FaFileImport /></h4>
		);
	}
  }	  
	  
  function UserDetails () {
		return (
		<>  
		<details id="details" onClick={handlePersonalMenu}>
				<summary />
		</details>
		</>
		);
  }	  
  function UserContainer() {
	var location = useLocation();
	
	if(location.pathname.split('/')[1] == "Posts"){
		contexto="Responder o Post."
	}
	
	if(loggedIn){
	  return (
	  <>
  		  <GoPencil id="postPencil" className="pencil-ico" onClick={handlePostModal} />
          <UserDisplay />
		  <UserDetails/>
	  </>
	);
	}
	else {
	  return (
	  <a href="/Login">Fazer Login </a> 
	);
	}
  }
  return (
    <>
      <Header>
        <div>
          <a href="/"><Logo className="logo" /></a>
        </div>
        <input name="search" placeholder="Pesquisar..." />
        <BsSearch className="search-ico" />
        <hr />
        <div className="container-menu">
		  <UserContainer/>
          <GiHamburgerMenu className="menu-ico" onClick={handleHamburguerMenu} />
        </div>
      </Header>
      <MenuPersonal className="PersonalMenu" open={personalMenuIsOpen}>
	  <span>Lorem Ipsum parabéns vc tem 2250KD</span>
	  </MenuPersonal>
      <HamburguerMenu className="HamburguerMenu" open={hamburguerMenuIsOpen}>
	  <HamburguerMenuContent/>
	  </HamburguerMenu>
	  <PostModal open={postModalIsOpen}>
		<PostModalContent className="PostModal" open={postModalIsOpen}> 
	    {/*
		<Form>
		  <Form.Group controlId="exampleForm.ControlTextarea1">
			<Form.Label>Escreva seu Post.</Form.Label>
			<Form.Control as="textarea" rows="3" />
		  </Form.Group>
		</Form>  
		*/}
		<h2>
		{contexto} <FaTimesCircle className="close-ico" onClick={handlePostModal} />
		</h2>
		
		<input type="text" style={{fontSize:"20px", marginTop:"-30px"}} placeholder="titulo" value={titleInput} onChange={inputChangeHandler}></input>
		<ReactQuill className="quillEditor" modules={{toolbar: toolbarOptions, history: historic}} formats={formats} theme="snow" value={quillInput}
                  onChange={quillChangeHandler} />
		<Enviar/>
		</PostModalContent>
		
		
	  </PostModal>
    </>
  );
}

export default Navbar;
