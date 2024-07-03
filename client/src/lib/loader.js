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
    if(createdPosts?.data?.data && savedPosts?.data?.data)
    return { posts: createdPosts.data.data,saved: savedPosts.data.data}
    if(createdPosts?.data?.data)
    return {posts:createdPosts.data.data, saved:null}
    if(savedPosts?.data?.data)
    return {posts:null, saved:savedPosts.data.data}
    

    }
    catch(err){
        console.log(err);
        return {posts:null, saved:null};
    }

}