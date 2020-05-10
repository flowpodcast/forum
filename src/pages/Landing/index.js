import React from 'react'

import { Header, DivBanner, MenuPersonal, HamburguerMenu, Chat } from './styles'

import { ReactComponent as Logo } from '../../assets/logo/FlowLogo.svg'

import Banner from '../../assets/imgs/BannerFlow.png'

import { BsSearch } from 'react-icons/bs'
import { GoPencil } from 'react-icons/go'
import { AiFillStar } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Landing() {

    function openMenu(menuName) {
        const Menu = document.querySelector('.HamburguerMenu')
        if (menuName === 'hamburguer') {
            Menu.style.opacity = '1'
            Menu.style.width = '300px'
            Menu.style.height = '100%'
        }
        else if (menuName === 'personal') {
            const PersonalMenu = document.querySelector('.PersonalMenu')
            PersonalMenu.style.opacity = '1'
            PersonalMenu.style.width = '350px'
            PersonalMenu.style.height = '491px'
        }
    }

    function closeMenu(menuName) {
        if (menuName === 'hamburguer') {
            const Menu = document.querySelector('.HamburguerMenu')
            Menu.style.opacity = '0'
            Menu.style.top = '60px'
            Menu.style.width = '25px'
            Menu.style.height = '100%'
        }
        else if (menuName === 'personal') {
            const PersonalMenu = document.querySelector('.PersonalMenu')

            PersonalMenu.style.opacity = '0'
            PersonalMenu.style.width = '25px'
            PersonalMenu.style.height = '0px'

        }
    }

    function handleHamburguerMenu() {
        const Menu = document.querySelector('.HamburguerMenu')
        const details = document.querySelector('details')

        if (handlePersonalMenu) {
            closeMenu('personal')
            details.open = false
        }

        if (Menu.style.opacity === '0') {
            openMenu('hamburguer')
        }
        else {
            closeMenu('hamburguer')
        }
    }

    function handlePersonalMenu(e) {
        const details = document.querySelector('details')

        if (handleHamburguerMenu) {
            closeMenu('hamburguer')
        }

        if (!details.open) {
            openMenu('personal')
        }
        else {
            closeMenu('personal')
        }
    }





    return (
        <React.Fragment>
            <Header>
                <div>
                    <Logo className="logo"></Logo>
                </div>
                <input type="text" name="search" placeholder="Pesquisar..." />
                <BsSearch className="search-ico"></BsSearch>
                <hr></hr>
                <div className="container-menu">
                    <GoPencil className="pencil-ico"></GoPencil>
                    <figure >
                    </figure>
                    <div className="personal-infos">
                        <span >GianlucaJux</span>
                        <div className="info-level">
                            <AiFillStar className="level-ico"></AiFillStar> <span>3000 KD</span>
                        </div>
                    </div>
                    <details onClick={(e) => handlePersonalMenu(e)}>
                        <summary></summary>
                    </details>
                    <GiHamburgerMenu className="menu-ico" onClick={handleHamburguerMenu} ></GiHamburgerMenu>
                </div>
            </Header>
            <MenuPersonal className="PersonalMenu">
            </MenuPersonal>
            <HamburguerMenu className="HamburguerMenu">
            </HamburguerMenu>
            <DivBanner>
                <img src={Banner} alt="Flow Podcast" />
                <div className="div-group">
                    <figure></figure>
                    <h5>Flow</h5>
                    <button>JOIN</button>
                </div>
            </DivBanner>
        <Chat>
        <div className="group-container">
            <div className="search-groups"></div>
            <div className="groups"></div>
        </div>
        <div className="group-infos">
            <aside className="infos"></aside>
            <aside className="advertisement">advertisement</aside>
        </div>

        </Chat>
            
        </React.Fragment>

    )
}