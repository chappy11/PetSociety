import axios from "axios"
import {BaseUrl} from './BaseUrl';

const url = `${BaseUrl}user/`;

export const User = {
   
    login:()=>{
        axios.post(url+"login");       
    },
    
    registerCustomer:async(formdata:any)=>{
        try{
            const headers = {
                'Content-type': 'multipart/form-data' 
           }
   
          const data =  await axios.post(url+"signupcustomer",formdata,{headers});

           return data;

        }catch(e){
            console.log(e)
        }
    },

    createShop:async(formdata:any)=>{
        try{
            const headers = {
                'Content-type':'multipart/form-data'
            }

            const data = await axios.post(url+"createshop",formdata,{headers});

            return data;
            
        }catch(e){
            console.log(e);
        }
    }
}