import React, { useEffect,useState } from 'react';
import SizeBox from '../SizeBox';

import {NavigationLists} from '../../constants/NavigationList'

import * as S from './style';
import { KEY,getItem } from '../../utils/storage.utils';

export default function Navigation(){
  const [user,setUser] = useState<any>(null);
  
  useEffect(()=>{
    displayName();
  },[])
  
  const displayName = async() => {
    const data = await getItem(KEY.Account);
    if(data){
      if(data.user_roles === "1"){
        window.location.href="http://localhost:3000/shop"
      }
      setUser(data);
    }
  }

  console.log(user);

    return (
      <S.Container>
        <S.Wrapper>
          <S.BrandContainer>
            <S.Brand>Pet Society</S.Brand>
          </S.BrandContainer>
          <S.NavigationList>
            {NavigationLists.map((value, index) => (
              <S.Link key={index.toString()}>{value.name}</S.Link>
            ))}
           
        
          </S.NavigationList>
          {user ?(
                 <S.AccountContainer>
                 <S.Link href="/login">{user?.firstname+" "+user?.lastname}</S.Link>
               </S.AccountContainer>
            ):(
              <S.AccountContainer>
              <S.Link href="/register">Register</S.Link>
              <SizeBox width={5} />
              <S.Text>/</S.Text>
              <SizeBox width={5} />
              <S.Link href="/login">Login</S.Link>
            </S.AccountContainer>
            )}
        </S.Wrapper>
      </S.Container>
    )
}
