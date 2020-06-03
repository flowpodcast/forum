import React from 'react';

import Banner from '../../assets/imgs/BannerFlow.png';
import {useLocation} from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/logo/FlowLogo.svg';
import {Header} from '../../components/Navbar/styles';
import {DivBanner} from '../Landing/styles'

export default function Login() {
  return (
    <>
      <Header>
        <div>
          <Logo className="logo" />
        </div>
        <hr />
      </Header>
	  <DivBanner>
        <img src={Banner} alt="Flow Podcast" />
      </DivBanner>
    </>
  );
}
