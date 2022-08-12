import styled from 'styled-components';
import {color} from '../../themes/Colors';

export const Container = styled.div`
    background-color:${color.color2};
    position:absolute;
    top:0;
    width:100vw;
    z-index:2;
`;

export const Brand = styled.h2`
    color:${color.color4};
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
    color:${color.color4};
    margin:0px 7px;
    cursor:pointer;

    &:hover{
        color:#fefefe;
    }
`;

export const Text = styled.p`
    color:white;
`;