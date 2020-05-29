import React, { useState } from 'react';

import { AiFillStar } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoPencil } from 'react-icons/go';

import { ReactComponent as Logo } from '../../assets/logo/FlowLogo.svg';
import {
  Header, MenuPersonal, HamburguerMenu,
} from './styles';

function Navbar() {
  const [hamburguerMenuIsOpen, setHamburguerMenuIsOpen] = useState(false);
  const [personalMenuIsOpen, setPersonalMenuIsOpen] = useState(false);
  const [createPostIsOpen, setCreatePostIsOpen] = useState(false);


  function handleHamburguerMenu() {
    const details = document.getElementById('details');

    if (details.open) details.open = false;
    //setPersonalMenuIsOpen(false);
	  IMenuIsOpen(setPersonalMenuIsOpen); 
    //setHamburguerMenuIsOpen(!hamburguerMenuIsOpen); 
  }

  function handlePersonalMenu() {
    //setHamburguerMenuIsOpen(false);
	IMenuIsOpen(setHamburguerMenuIsOpen); 
    //setPersonalMenuIsOpen(!personalMenuIsOpen);
  }
  
  function handleCreatePost() {
	IMenuIsOpen(setCreatePostIsOpen);  
  }
  
  //essa função façade fecha todos os menus e por ultimo... 
  //...abre o menu que o usuário clicar pelo handleXXXXMenu(o que tambem poderia ser um façade na minha opinião)
  //garantindo que apenas um menu seja aberto por vez.
  function IMenuIsOpen(menuToOpen) { //o argument menuToOpen deve ser a bool constante do menu que sera aberto e trocado pra true
	setPersonalMenuIsOpen(false);
        setHamburguerMenuIsOpen(false);
	setCreatePostIsOpen(false);
	menuToOpen(true);
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
          <GoPencil className="pencil-ico" onClick={handleCreatePost} />
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
      <MenuPersonal className="PersonalMenu" open={personalMenuIsOpen} />
      <HamburguerMenu className="HamburguerMenu" open={hamburguerMenuIsOpen} />
    </>
  );
}

export default Navbar;
