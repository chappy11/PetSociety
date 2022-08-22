import {useCallback, useEffect, useState} from 'react';
import {Category} from '../services/Category';
export type UseGetCategory = {
    category:any;
}

export default function useGetCategory(){
    const [category,setCategory] = useState<[]>([]);

    const sendRequest = useCallback(async()=>{
        try{
            const response = await Category.getCategory();
            setCategory(response?.data?.data);
        }catch(e){
            console.log(e);
        }
    },[])

    useEffect(()=>{
        sendRequest();
    },[]);

    return{
        category
    }
}