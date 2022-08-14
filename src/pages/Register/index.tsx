import React, { useState } from "react"
import { Container, Form, Row, Col, Button, Stack } from "react-bootstrap"
import { SizeBox, TextInput } from "../../components"
import swal from "sweetalert"
import Header from "./Header"
import {User} from '../../services/User';
import * as S from "./style"
export default function Register() {
  const [selectedImage,setSelectedImage] = useState(null);
  const [params, setParams] = useState({
    username: "",
    password: "",
    confirmPassword:"",
    firstname: "",
    middlename: "",
    lastname: "",
    gender: "",
    contact: "",
    birthdate: "",
    address: "",
    email:"",
  });

  const [error,setError] = useState({
    errorUsername:"",
    errorPassword:"",
    errorConfirmPassword:"",
    errorFirstname:"",
    errorMiddlename:"",
    errorLastname:"",
    errorGender:"",
    errorContact:"",
    errorBirthdate:"",
    errorAddress:"",
  })

  const uploadImage = (e:any) =>{
    setSelectedImage(e.target.files[0]);
  }

  const onChange = (e:any) =>{
    console.log(e.target.name);
    setParams({...params,[e.target.name]:e.target.value});
  }

  const errorChange = (name:string,value:string)=>{
    setError({...error,[name]:value})
  }



  const handleClick = async() => {
    const {username,password,confirmPassword,firstname,middlename,lastname,gender,contact,birthdate,address,email} = params;
    if(!selectedImage){
      swal("Error","No Profile Picture selected","error");
    }else if(email===""||username==="" || password==="" || confirmPassword === "" || firstname === "" || middlename === "" || lastname === "" || gender === "" || contact === "" || birthdate === "" || address === ""){
      swal("Error","No Fillout all fields","error");
    }else if(password !== confirmPassword){
      swal("Error","Password do not match","error");
    }
    else{
      let formdata = new FormData();
      formdata.append("profilePicture",selectedImage);
      formdata.append("username",username);
      formdata.append("password",password);
      formdata.append("firstname",firstname);
      formdata.append("mi",middlename);
      formdata.append("lastname",lastname);
      formdata.append("gender",gender);
      formdata.append("birthdate",birthdate);
      formdata.append("address",address);
      formdata.append("email",email);
      formdata.append("contact",contact);
      try{
        const res = await User.registerCustomer(formdata);
        
        if(res?.data.status == 1){
          swal("Success",res?.data.message,"success").then((value)=>{
            if(value){
              window.location.replace("http://localhost:3000/login");
            }
          })
        }else{
          swal(res?.data.message);
        }
        
        
      }catch(e){
        swal("Error","Something went wrong","error");
      }
    
    }
    
   
  }

  console.log("Params",params);

  return (
    <>
      <Header />
      <SizeBox height={20} />
      <Container>
        <Row>
          <Col xs={3}>
            {selectedImage &&
              <img src={URL.createObjectURL(selectedImage)} style={{width:200,height:200}} alt={"Logo"}/>
            }
           
            <input type="file" onChange={uploadImage}/>
          </Col>
          <Col>
            <h3>Account Info</h3>
            <Col>
              <TextInput
                type="text"
                name="email"
                label="Email"
                placeholder="Email"
                onChange={onChange}
              />
              <SizeBox height={10} />
            </Col>
            <Col>
              <TextInput
                placeholder="Username"
                label="Username"
                name="username"
                onChange={onChange}
              />
            </Col>
            <SizeBox height={10} />
            <Col>
              <TextInput
                placeholder="Password"
                type="Password"
                label="Password"
                name="password"
                onChange={onChange}
              />
            </Col>
            <SizeBox height={10} />
            <Col>
              <TextInput
                placeholder="Confirm Password"
                type="Password"
                label="Confirm Password"
                name="confirmPassword"
                onChange={onChange}
              />
            </Col>
            <SizeBox height={20} />
            <h3>Personal Data</h3>
            <Row>
              <Col>
                <TextInput
                  placeholder="Firstname"
                  label="Firstname"
                  name="firstname"
                  onChange={onChange}
                />
              </Col>
              <Col>
                <TextInput
                  placeholder="Middlename"
                  label="Middlename"
                  name="middlename"
                  onChange={onChange}
                />
              </Col>
              <Col>
                <TextInput
                  placeholder="Lastname"
                  label="Lastname"
                  name="lastname"
                  onChange={onChange}
                />
              </Col>
            </Row>
            <SizeBox height={20} />
            <Row>
              <Form.Label>Gender</Form.Label>
              <Stack direction="horizontal">
                <Form.Check
                  type="radio"
                  name="gender"
                  value="Male"
                  label="Male"
                  onChange={onChange}
                />
                <SizeBox width={20} />
                <Form.Check
                  type="radio"
                  name="gender"
                  value="Female"
                  label="Female"
                  onChange={onChange}
                />
              </Stack>
            </Row>
            <SizeBox height={20} />
            <Row>
              <Col>
                <TextInput
                  type="text"
                  label="Contact Number"
                  placeholder="09XXXXXXX"
                  name="contact"
                  onChange={onChange}
                />
              </Col>
              <Col>
                <TextInput type="date" label="Birthdate" name="birthdate" onChange={onChange} />
              </Col>
            </Row>
            <SizeBox height={20} />
            <TextInput label="Address" placeholder="Address" name="address" onChange={onChange}/>
            <SizeBox height={20} />
            <Button onClick={handleClick}>Submit</Button>
            <SizeBox height={20}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}
