import React from 'react'
import * as S from './style';

type Props = {
    height?:number;
    width?:number;
}

export default function SizeBox(props:Props){
    return(
        <S.Box height={props.height} width={props.width}/>
    )
}