import React,{useState} from "react"
import { Container, Col, Row, Button } from "react-bootstrap"
import { SizeBox, TextInput } from "../../components"
import {User} from '../../services/User';
import swal from 'sweetalert';
import Header from "./Header"
export default function RegisterShopOwner() {
  const [selectedImage,setSelectedImage] = useState(null);
  const [params,setParams] = useState({
    username:"",
    password:"",
    confirmPassword:"",
    shopEmail:"",
    shopDescription:"",
    firstname:"",
    middlename:"",
    lastname:"",
    address:"",
    shopName:"",
    contact:"",
  });

  const onChange = (e:any) =>{
    setParams({...params,[e.target.name]:e.target.value});
  }


  const uploadImage = (e:any) =>{
    setSelectedImage(e.target.files[0]);
  }

  const handleSubmit = async()=>{
    const {username,password,confirmPassword,shopEmail,shopDescription,firstname,lastname,middlename,address,shopName,contact} = params;
    if(!selectedImage){
      swal("Error","Fillout all fields",'error');
    }
    if(username === "" || password === "" || confirmPassword === "" || shopEmail==="" || shopDescription ==="" || firstname==="" || middlename==="" || lastname==="" || address==="" || shopName==="" || contact===""){
      swal("Error","Fillout all fields","error");
    } else if(password !== confirmPassword){
      swal("Error","Password do not match","error");
    }else{
        const formdata = new FormData();

        formdata.append("shopLogo",selectedImage ? selectedImage : "");
        formdata.append("username",username);
        formdata.append("password",password);
        formdata.append("confirmPassword",confirmPassword);
        formdata.append("shopEmail",shopEmail);
        formdata.append("shopDescription",shopDescription);
        formdata.append("firstname",firstname);
        formdata.append("middlename",middlename);
        formdata.append("lastname",lastname);
        formdata.append("address",address);
        formdata.append("contact",contact);
        formdata.append("shopName",shopName);

        try{

          const res = await User.createShop(formdata);

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

  return (
    <>
      <Header />
      <SizeBox height={20} />
      <Container>
        <Row>
          <Col xs={4}>
            {selectedImage &&
               <img src={URL.createObjectURL(selectedImage)} style={{width:"200px",height:"200px"}} alt="Shop Logo"/>
            }
           
            <input type="file" onChange={uploadImage} />
          </Col>
          <Col>
            <h3>Account Info</h3>
            <Col>
              <TextInput
                type="text"
                name="shopEmail"
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
            <SizeBox height={20} />
            <h3>Personal Info</h3>
            <Row>
              <Col>
                <TextInput
                  name="firstname"
                  placeholder="Firstname"
                  label="Firstname"
                  onChange={onChange}
                />
              </Col>
              <Col>
                <TextInput
                  name="middlename"
                  placeholder="Middlename"
                  label="Middlename"
                  onChange={onChange}
                />
              </Col>
              <Col>
                <TextInput
                  name="lastname"
                  placeholder="Lastname"
                  label="Lastname"
                  onChange={onChange}
                />
              </Col>
            </Row>
            <SizeBox height={20}/>
            <TextInput placeholder="Contact" label="Contact Number" name="contact" onChange={onChange}/>
            <SizeBox height={20} />
            <h3>Shop Information</h3>
            <SizeBox height={10} />
            <TextInput
              placeholder="Shop Name"
              label="Shop Name"
              name="shopName"
              onChange={onChange}
            />
            <SizeBox height={10} />
            <TextInput
              placeholder="Description"
              label="Shop Description"
              name="shopDescription"
              onChange={onChange}
            />
            <SizeBox height={10} />
            <TextInput
              placeholder="Shop Address"
              label="Shop Address"
              name="address"
              onChange={onChange}
            />
            <SizeBox height={20} />
            <Button onClick={handleSubmit}>Submit</Button>
            <SizeBox height={20}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}
