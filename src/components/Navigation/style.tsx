import styled from 'styled-components';

export const Container = styled.div`
    background-color:#9EC4C5;
    position:fix;
    top:0;
    z-index:2;
`;

export const Brand = styled.h2`
    color:white;
`;

export const Wrapper = styled.div`
    width:100%;
    display:flex;
    height:60px;
   
`;

export const BrandContainer = styled.div`
    display:flex;
    align-items:center;
    padding:0px 15px;

`;

export const NavigationList = styled.div`
    display:flex;
    flex:1;
    align-items:center;
    padding:0px 20px;
`;

export const AccountContainer = styled.div`
    display:flex;
    align-items:center;
    padding:0px 20px;
`;

export const Link = styled.a`
    text-decoration:none;
    color:white;
    margin:0px 7px;
    cursor:pointer;

    &:hover{
        color:#7D7474;
    }
`;

export const Text = styled.p`
    color:white;
`;