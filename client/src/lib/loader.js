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

export const profilePageLoader = async() =>{
    try{
    const savedPosts = await apiRequest.get('/users/saved');
    const createdPosts = await apiRequest.get('/users/posts');
    const chats = await apiRequest.get('/chats')
    return {posts: createdPosts?.data?.data || null, saved: savedPosts?.data?.data || null, chats: chats?.data?.data || null};
    

    }
    catch(err){
        console.log(err);
        return {posts:null, saved:null};
    }

}