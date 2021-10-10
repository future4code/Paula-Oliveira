import styled from "styled-components";

export const ContainerApp = styled.div`
  
    background-color: #009292;
    padding: 15px;
    display:flex;
    aling-items:center;
    justify-content: center;
    
`
export const ContainerDiv = styled.div`
    border: 1px solid #E5DDC8;
    background: linear-gradient(45deg, #88070B, #009292,#F65156,#FFCE13) ;
    background-size: 300% 300%;
    border-radius: 8px;
    width:300px;
    height:575px;
    padding: 5px;
    animation: colors 20s infinite alternate;
   
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
export const ContainerBorder = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-style: solid;
    border-bottom-width: 2px;
    border-top-width: 0;
    border-right-width: 0;
    border-left-width: 0;
    margin:5px ;  
    height: 70px;
    color:#E5DDC8;
`
export const ContainerH3 = styled.h3`
    font-size:35px;
    text-shadow: 1px 1px black;
    color:#FBD160;
    font-weight: bold;
    
`
export const ContainerButtonTela1 = styled.button`
    all: unset;
    cursor: pointer;
    outline: revert; 
   
`
export const ContainerImgMatche = styled.img`
    width: 40px;
    height: 40px;
`
export const ContainerButtonTela2 = styled.button`
    all: unset;
    cursor: pointer;
    outline: revert; 
`
export const ContainerNotList = styled.p`
display: flex;
color: white;
align-items: center;
height: 200px;
font-size: 25px;
`