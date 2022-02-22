export const getGist = async (id) => {
    console.log(id)
    const url= `https://api.github.com/gists/${id}`;
    const resp = await fetch(url);
    const data = await resp.json();


    
    return{
        description: data.description,
        dateOfCreation: data.created_at,
        ownerName: data.owner.login,
        ownerPicture : data.owner.avatar_url,
        githubLink : data.url,
        linksList : data.files,
        id:data.id

     }
    

        
    }