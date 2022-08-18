import axios from "axios"
import { isAsyncFunction } from "util/types";
import {BaseUrl} from './BaseUrl';

const url = `${BaseUrl}user/`;

export const User = {
   
    login:async(payload:{username:string,password:string})=>{
        try{
            const headers = {
                "Content-Type":"text/plain"
            }

            const data = await axios.post(url+"login",payload,{headers});

            return data;

        }catch(e){
            console.log(e);
        }
            
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