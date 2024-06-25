import apiRequest from "./apiRequest"

export const singlePageLoader = async({request,params}) =>{
    try{
        console.log(params)
    const res = await apiRequest.get('/posts/' + params.id);
    if(res?.data?.data)
    return res.data.data;
    }
    catch(err){
        console.log(err);
        return null;
    }
}

export const listPageLoader = async({request,params}) =>{
    try{
        const queries = request.url.split('?');
        const res = await apiRequest.get('/posts?'+queries[1]);
        if(res?.data?.data)
        return res.data.data;
    }
    catch(err){
        console.log(err);
        return null;
    }
}