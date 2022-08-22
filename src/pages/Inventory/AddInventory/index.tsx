import React,{useMemo,useState,useEffect    } from 'react';
import {Container} from 'react-bootstrap';
import {TextInput,SizeBox} from '../../../components'
import useGetCategory from '../../../hooks/useGetCategory';
export default function AddInventory(){
   const {category} = useGetCategory()
   const [list,setList] = useState<any[]>([]);

    return(
    <Container className="justify-content-center">
        <h1>Add Inventory</h1>
        <TextInput name="name" label="Item Name" placeholder="Item Name"/>
        <SizeBox height={10}/>
        <TextInput name="description" label="Description" placeholder="Item Name"/>
        <SizeBox height={10}/>
        <select>
            {category||[].map((val,index)=>{return(
                <option>{val?.category_name}</option>
            )})}
        </select>
    </Container>
    )
}