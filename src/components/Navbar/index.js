import React, { useState } from 'react';

import { AiFillStar } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoPencil } from 'react-icons/go';
import { FaTimesCircle } from 'react-icons/fa';
import { FaFileImport } from 'react-icons/fa'; 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import {formats, toolbarOptions, historic, handleChange, handleTitleChange, postarNoForum} from '../../Quill/config.js';

import { ReactComponent as Logo } from '../../assets/logo/FlowLogo.svg';
import {
  Header, MenuPersonal, HamburguerMenu, PostModal, PostModalContent, EstiloResponsividade
} from './styles';

function HamburguerMenuContent() { //isso aqui podia ser um novo arquivo com todos os "contents" ---------------------
return ( 
<>
<center> {/*me julgue, o margin auto não foi.*/}
	<h2>
		<a href="Cadastro">Cadastro</a>
	</h2>
</center>
</>
);
}

var loggedIn = false;

function UserDisplay (){
if(loggedIn)	{
	return (	
	<>
	<figure/>
	<div className="personal-infos">
			<span>GianlucaJux</span>
		<div className="info-level">
			<AiFillStar className="level-ico" />
			<span>2250 KD</span>
		</div>
	</div>
	{/*o details e a setinha não estão aqui por causa de um problema de arquitetura, como tudo isso não está sendo renderizado por uma classe, não tem como eu colocar o details antes do handlePersonalMenu ser definido */}
	</>
	);
}
return ( <a href="">Fazer Login </a> );
}

//----------------------------------------------------------------------

function Navbar() {
  const [hamburguerMenuIsOpen, setHamburguerMenuIsOpen] = useState(false);
  const [personalMenuIsOpen, setPersonalMenuIsOpen] = useState(false);
  const [postModalIsOpen, setPostModalIsOpen] = useState(false);


  function handleHamburguerMenu() {
    const details = document.getElementById('details');

    if (details.open) details.open = false;
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
  const [userInput, setUserInput] = useState('');

 function inputchangehandler(event) {
    setUserInput(event.target.value);
	handleTitleChange(event.target.value);
  }
  
  function IPostarNoForum () {
  postarNoForum();
  IMenuIsOpen(setPostModalIsOpen, postModalIsOpen);
  window.location.reload(false); //mudar pra so dar refresh se ele estiver na lista de posts
  }
	  
  function UserDetails () {
	if(loggedIn)
	{
		return (
		<>  
		<details id="details" onClick={handlePersonalMenu}>
				<summary />
		</details>
		</>
		);
	}
	else
	{
		return (
		<>  
		<details id="details" style={{display:"none"}} onClick={handlePersonalMenu}>
				<summary />
		</details>
		</>
		);
	}
  }	  
	  
  return (
    <>
      <Header>
        <div>
          <Logo className="logo" />
        </div>
        <input name="search" placeholder="Pesquisar..." />
        <BsSearch className="search-ico" />
        <hr />
        <div className="container-menu">
          <GoPencil className="pencil-ico" onClick={handlePostModal} />
          <UserDisplay />
		  <UserDetails/>
          <GiHamburgerMenu className="menu-ico" onClick={handleHamburguerMenu} />
        </div>
      </Header>
      <MenuPersonal className="PersonalMenu" open={personalMenuIsOpen}>
	  <span>Lorem Ipsum parabéns Gian vc tem 2250KD</span>
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
		Escreva seu Post. <FaTimesCircle className="close-ico" onClick={handlePostModal} />
		</h2>
		
		<input type="text" style={{fontSize:"20px", marginTop:"-30px"}} placeholder="titulo" value={userInput} onChange={inputchangehandler}></input>
		<ReactQuill className="quillEditor" modules={{toolbar: toolbarOptions, history: historic}} formats={formats} theme="snow" value={''}
                  onChange={handleChange} />
		<h4 className="upload-ico" onClick={IPostarNoForum}>Enviar <FaFileImport /></h4>
		</PostModalContent>
		
		
	  </PostModal>
    </>
  );
}

export default Navbar;
