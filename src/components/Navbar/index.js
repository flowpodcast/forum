import React, { useState } from 'react';

import { AiFillStar } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoPencil } from 'react-icons/go';
import { FaTimesCircle } from 'react-icons/fa';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import {formats, toolbarOptions, historic, handleChange, post} from '../../Quill/config.js';

import { ReactComponent as Logo } from '../../assets/logo/FlowLogo.svg';
import {
  Header, MenuPersonal, HamburguerMenu, PostModal, PostModalContent,
} from './styles';


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
          <figure />
          <div className="personal-infos">
            <span>GianlucaJux</span>
            <div className="info-level">
              <AiFillStar className="level-ico" />
              <span>2250 KD</span>
            </div>
          </div>
          <details id="details" onClick={handlePersonalMenu}>
            <summary />
          </details>
          <GiHamburgerMenu className="menu-ico" onClick={handleHamburguerMenu} />
        </div>
      </Header>
      <MenuPersonal className="PersonalMenu" open={personalMenuIsOpen}>
	  <span>Lorem Ipsum parabéns Gian vc tem 2250KD</span>
	  </MenuPersonal>
      <HamburguerMenu className="HamburguerMenu" open={hamburguerMenuIsOpen} />
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
		
		<br/>
		<ReactQuill className="quillEditor" modules={{toolbar: toolbarOptions, history: historic}} formats={formats} theme="snow" value={post}
                  onChange={handleChange} />
		</PostModalContent>
	  </PostModal>
    </>
  );
}

export default Navbar;
