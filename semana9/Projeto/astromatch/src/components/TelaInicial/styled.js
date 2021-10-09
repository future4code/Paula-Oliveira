import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
    padding-top: 50px;
    padding-right: 30px;
    padding-bottom: 50px;
    padding-left: 80px;
`;

export const ContainerBorder = styled.div`
    border: 2px solid black;
    width:320px;
    display: flex;
    align-items: center;
    justify-content: space-around;
   
`

export const ContainerDiv = styled.div`
    border: 5px solid #672901;
    background: linear-gradient(45deg, #F76201,#FEEBA0,#D41E00,#672901) ;
    background-size: 300% 300%;
    border-radius: 8px;
    padding: 5px;
    animation: colors 15s ease infinite;
    @keyframes colors{
        0%{
            background-position: 0% 50%;
        }

        50%{
            background-position: 100% 50%;
        }

        100%{
            background-position: 0% 50%;
        }
    }
`

export const ContainerImg = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 8px;
`;

export const ContainerP = styled.p`
    word-wrap: break-word;
    border:1px solid #000000;
    width:280px;
    padding: 8px;
`

export const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
`
export const ContainerCoracao = styled.div`
position: relative;
display: flex;
justify-content: center;
width: 100px;
`
export const ContainerButtonNovos = styled.div`
box-shadow: 0px 10px 14px -7px #3e7327;
background:linear-gradient(to bottom, #77b55a 5%, #72b352 100%);
background-color:#77b55a;
border-radius:4px;
border:1px solid #4b8f29;
display:inline-block;
cursor:pointer;
color:#ffffff;
font-family:Arial;
font-size:13px;
font-weight:bold;
padding:6px 12px;
text-decoration:none;
text-shadow:0px 1px 0px #5b8a3c;

myButton:hover{
  background:linear-gradient(to bottom, #72b352 5%, #77b55a 100%);
	background-color:#72b352;
}

myButton:active{
  position:relative;
	top:1px;
}
`

