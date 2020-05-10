import styled from 'styled-components'

export const Header = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Blinker:wght@100;200;300;400;600;700;800;900&display=swap');

    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
		z-index: 100;		
		padding: 0 1rem;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: auto;
				margin-right: 2px;				
		}
		
		.logo {
			margin-right: 20px;
		}

    input{
        width: 100%;
        height: 2.2rem;
        border-radius: 1px;
        border-color: transparent;
        outline: none;
        padding-left: 15px;
        background: #2B2B2B;
        color: #fff;
        text-align: left;
        font-family: 'Blinker', sans-serif;
        font-size: 1.2rem;
        font-weight: normal;
        
    }   

    input::placeholder{
        color: #bbb;
        font-family: 'Blinker', sans-serif;
        font-size: 1.2rem;
        font-weight: normal;
        
    }   
    
    .search-ico{
        cursor: pointer;
        position: relative;
        width: 30px;
        height: 30px;
        color: #fff;
        margin-left: 1%;
        transition: 0.5s;
    }
    
    .search-ico:hover{
        color: #C09235;

    }
    
    .container-menu{
        width: auto;
        height: 100%;
        z-index: 100;
    }

    figure{
        width: 45px;
        height: 45px;
        background-color: #141414;
        overflow: hidden;
        border-radius: 5px;

    }
    
    details{
        color: #fff;
        cursor: pointer;
        outline: transparent;
        position: relative;
        right: 15px; 
        z-index: 100;
    }

    .pencil-ico{
        cursor: pointer;
        color: #fff;
        width: 20px;
        height: 20px;
        margin-right: 3%;
        transition: .5s;
        margin-right: 18px;
        margin-left: 18px;
    }
    .pencil-ico:hover{
        color: #C09235;
   
    }

    hr{
        width: 1px;
        height: 40%;
        margin-left: 30px;
        border: 1px solid #2b2b2b ;
    }
    .level-ico{
        color: #C09235;
        position: relative;
        right: 3px;
        bottom: 1px;
        transition: .5s;
        cursor: pointer;
        border-color: transparent;
        background: transparent;
    }
    .level-ico:hover{
        color: #C09235;

    }
    .menu-ico{
        cursor: pointer;
        color: #fff;
        width: 25px;
        height: 25px;
				margin-left: 10px;
        transition: .5s;
    }
    .menu-ico:hover{
        color: #C09235;
    }

    .personal-infos{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        width: auto;
        height: 40px;
				z-index: 100;
				padding: 0 2rem 0 1rem;
    }

    .personal-infos span{
        font-family: 'Blinker', sans-serif;
        font-size: 16px;
        font-weight: normal;
    }

    .info-level{
				margin-top: 5px;
				width: 100%;
    }

    
`;

export const DivBanner = styled.div`
    display: relative;
    width: 100%;
    height: 215px;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;

    img{ 
        display: absolute;
        top: 70px;
        width: 1920px;
        height: 215px;
    }

    figure{
        width: 50px;
        height: 50px;
        background-color: #5b5b5b;
        border-radius: 5px;
    }

    .div-group{
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 375px;
    height: 75px;
    border-radius: 5px;
    background-color: #2B2B2B;
    margin: 0;
    top: 107px;
    left: 37px;
    opacity: .7;
    transition: 0.5s;
    }

    .div-group:hover{
        opacity: 1;
    }

    h5{
        position: relative;
        color: #000;
        font-family: 'Blinker', sans-serif;

        font-weight: 600;
        font-size: 36px;
        left: -5px;
    }

    button{
        display: flex;
        position: relative;
        cursor: pointer;
        border-radius: 5px;
        align-items: center;
        justify-content: center;
        border: transparent;
        width: 125px;
        height: 45px;
        outline: none;
        font-family: 'Blinker', sans-serif;
        font-weight: normal;
        font-size: 22px;
        color: #1C1C1C;     
        transition: 0.5s;   
        background-color: #696969;
        }
    button:hover{
        color: #C09235;
        background-color: #4B4B4B;
        }

    @media(min-width: 1920px){
        img{
            width: 100%;
        }
    }


`;


export const MenuPersonal = styled.div`
 position: absolute;
 width: 25px;
 height: 25px;
 top: 70px;
 right: 68px;
 background-color: #141414;
    opacity: 0;
    transition: 0.5s;
    z-index: 100;
`;

export const HamburguerMenu = styled.div`
 position: absolute;
 width: 25px;
 height: 25px;
 top: 70px;
 right: 0;
 background-color: #141414;
 transition: all 0.4s ease-in;
 opacity: 0;
 z-index: 100;
 box-shadow: 0 10px 5px #141414;
`;

export const Chat = styled.main`
display: flex;
flex-direction: row;

width: 100%;
min-height: 100%;

.group-container{
    width: 80%;
    min-height: 100vh;
    padding: 13px 13px;
}

.search-groups{
    background-color: #696969;
    width: calc(100% -13px);
    height: 70px;
    border-radius: 10px;
}

.groups{
    
    background-color: #696969;
    width: 100%;
    min-height: 100%;
  margin-top: 13px;
border-radius: 10px;
}

.group-infos{
width: 24.9%;
min-height: 100%;

padding-top: 13px;
padding-right: 13px;


}

.infos{
    position:relative;
    width: 100%;
    height: 50%;
border-radius: 10px;
background-color: #696969

}

.advertisement{
    margin-top: 13px;
    position:relative;
    width: 100%;
    height: 50%;
border-radius: 10px;
background-color: #696969
}
`;



