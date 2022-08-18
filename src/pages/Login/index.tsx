import React,{useState} from "react"
import { Button, Card, Container } from "react-bootstrap"
import { SizeBox, TextInput } from "../../components"
import swal from "sweetalert"
import * as S from "./style"
import {KEY,save} from '../../utils/storage.utils';
import { User } from "../../services/User"

export default function Login() {
  const [data,setData] = useState({
    username:"",
    password:""
  });

  const onChange = (e:any) =>{
    setData({...data,[e.target.name]:e.target.value});
  }

  async function handleLogin(){
    if(data.username === "" || data.password === ""){
      swal("Error","Fill out all fields","error");
    }else{
      const response = await User.login(data);
      if(response?.data.status == 1){
        save(response?.data.data[0]);

        if(response?.data.data[0].user_roles ==1){
          console.log("SHOP")
          swal("Success",response?.data.message,"success").then(res=>{
            window.location.href="http://localhost:3000/shop";
            })
        }else if(response?.data.data[0].user_roles ==2){
          console.log("user ")
          swal("Success",response?.data.message,"success").then(res=>{
            window.location.href="http://localhost:3000";
            })
        }
      
        return;
      }   
      swal("Error",response?.data.message,"error")
    }
  }


  return (
    <S.LoginContainer>
      <S.LoginCard>
        <Card.Header>Welcome to Pets Society</Card.Header>
        <Card.Body>
          <TextInput name="username" placeholder="Username" label="Username" onChange={onChange}/>
          <SizeBox height={15} />
          <TextInput name="password" type="password" placeholder="Password" label="Password" onChange={onChange}/>
          <SizeBox height={20} />
          <Button onClick={handleLogin}>Login</Button>
          <SizeBox height={20} />
          <p className="text-align-center">
            Don't have any account? <a href="/register">Register Now</a>
          </p>
        </Card.Body>
      </S.LoginCard>
    </S.LoginContainer>
  )
}
