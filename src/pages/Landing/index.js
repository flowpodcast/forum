import React from 'react';


import { AiFillStar } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoPencil } from 'react-icons/go';

import Banner from '../../assets/imgs/BannerFlow.png';
import { ReactComponent as Logo } from '../../assets/logo/FlowLogo.svg';
import {
	Header, DivBanner, MenuPersonal, HamburguerMenu, Chat,
} from './styles';

export default function Landing() {
	const HamburguerConf = {
		element: () => document.querySelector('.HamburguerMenu'),
		visibleStyles: {
			opacity: 1,
			width: '300px',
			height: '100%'
		},
		hiddenStyles: {
			opacity: 0,
			width: '0px',
			height: '100%'
		}
	}

	const PersonalConf = {
		element: () => document.querySelector('.PersonalMenu'),
		visibleStyles: {
			opacity: 1,
			width: '350px',
			height: '491px'
		},
		hiddenStyles: {
			opacity: 0,
			width: '0px',
			height: '0px'
		}
	}

	function setMenuStyles(element, stylesObj) {
		const styles = stylesObj.map(key => key[0])
		const values = stylesObj.map(value => value[1])

		for (let i = 0; i <= styles.length - 1; i++) {
			element.style[`${styles[i]}`] = values[i];
		}
	}

	function openMenu(conf = {}) {
		const element = conf.element() && conf.element().style ? conf.element() : null;

		if (!element) return;

		const visibleStyles = typeof conf.visibleStyles === 'object' ? Object.entries(conf.visibleStyles) : null

		setMenuStyles(element, visibleStyles)

		element.onclick = e => e.stopPropagation()
		element.visible = true;
	}

	function closeMenu(conf = {}) {
		const element = conf.element() && conf.element().style ? conf.element() : null;

		if (!element) return;

		const hiddenStyles = typeof conf.hiddenStyles === 'object' ? Object.entries(conf.hiddenStyles) : null

		setMenuStyles(element, hiddenStyles)

		element.onclick = e => e.stopPropagation()
		element.visible = false;
	}

	function toggleMenu(conf) {
		if (!conf.element().visible) {
			openMenu(conf);
		} else {
			closeMenu(conf);
		}
	}

	function handleHamburguerMenu(e) {
		closeMenu(PersonalConf)
		toggleMenu(HamburguerConf);
	}

	function handlePersonalMenu(e) {
		closeMenu(HamburguerConf)
		toggleMenu(PersonalConf);
	}

	function closeAll(e) {
		e.stopPropagation();
		closeMenu(HamburguerConf);
		closeMenu(PersonalConf);
	}

	return (
		<>
			<Header>
				<div>
					<Logo className="logo" />
				</div>
				<input type="text" name="search" placeholder="Pesquisar..." />
				<BsSearch className="search-ico" />
				<hr />
				<div className="container-menu">
					<GoPencil className="pencil-ico" />
					<figure />
					<div className="personal-infos">
						<span>GianlucaJux</span>
						<div className="info-level">
							<AiFillStar className="level-ico" />
							{' '}
							<span>2250 KD</span>
						</div>
					</div>
					<details onClick={handlePersonalMenu}>
						<summary />
					</details>
					<GiHamburgerMenu className="menu-ico" onClick={handleHamburguerMenu} />
				</div>
			</Header>
			<MenuPersonal className="PersonalMenu" />
			<HamburguerMenu className="HamburguerMenu" />
			<content onClick={closeAll}>
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
						<div className="groups" />
					</div>
					<div className="group-infos">
						<aside className="infos" />
						<aside className="advertisement">advertisement rapá</aside>
					</div>
				</Chat>
			</content>
		</>

	);
}
