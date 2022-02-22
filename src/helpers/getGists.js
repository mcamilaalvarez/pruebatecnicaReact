export const getGists = async () => {
    const url= `https://api.github.com/gists?per_page=100`;
    const resp = await fetch(url);
    const data = await resp.json();

    const gists = data.map(
        gist => {
            return{
                description: gist.description,
                dateOfCreation: gist.created_at,
                ownerName : gist.owner.login,
                ownerPicture : gist.owner.avatar_url,
                gistId : gist.id

            }
        }
    )

    return gists;
}