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

  function handleHamburguerMenu() {
    const details = document.getElementById('details');

    if (details.open) details.open = false;
    setPersonalMenuIsOpen(false);
    setHamburguerMenuIsOpen(!hamburguerMenuIsOpen);
  }

  function handlePersonalMenu() {
    setHamburguerMenuIsOpen(false);
    setPersonalMenuIsOpen(!personalMenuIsOpen);
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
          <GoPencil className="pencil-ico" />
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
