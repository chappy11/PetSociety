import {BaseUrl} from './BaseUrl';
import axios from 'axios';

const url =`${BaseUrl}category/`

export const Category = {
    getCategory: ()=>{
        const categories =  axios.get(url+'getcategories');
        return categories;
    }
}
