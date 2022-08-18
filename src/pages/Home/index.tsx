import React from 'react'
import { Navigation } from '../../components';
import Header from './Header';
import Product from './Product';
import * as S from './style';

export default function Home(){
    
    return(
        <div >
            <Navigation/>
            <Header/>
            <Product/>
        </div>
    )
}