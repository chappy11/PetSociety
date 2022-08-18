
export const KEY = {
    Account:'Account',
}

export const save = (data:any) =>{
    const payload = JSON.stringify(data);

    localStorage.setItem(KEY.Account,payload);
}

export const getItem = async(key:string) =>{
    const data = await localStorage.getItem(key);
    if(data){
        return JSON.parse(data);
    }
        return null;
    
}