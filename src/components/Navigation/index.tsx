import React, { useEffect,useState } from 'react';
import SizeBox from '../SizeBox';
import { BaseUrl } from '../../services/BaseUrl';

import {NavigationLists} from '../../constants/NavigationList'
import { Image,NavDropdown } from 'react-bootstrap';
import * as S from './style';
import { KEY,getItem,remove } from '../../utils/storage.utils';

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

  function handleLogout(){
    remove();
    window.location.href="/";
  }

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
                   <Image src={BaseUrl+user?.profilePic} thumbnail={true} roundedCircle={true} style={{width:'30px',height:'30px'}}/>
                  <S.Drop title={user?.firstname+" "+user?.lastname} id="nav-dropdown">
                      <NavDropdown.Item eventKey="4.3">Settings</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item eventKey="4.4" onClick={handleLogout}>Logout</NavDropdown.Item>
                 </S.Drop>
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
            <SizeBox width={20}/>
        </S.Wrapper>
      </S.Container>
    )
}
