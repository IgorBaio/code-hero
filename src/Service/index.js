export const getDataFromApi = async () => {
    const response = await fetch("https://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=ffa4ec96f7d0b733415b146fc99d710a&hash=48310f883280ac8a96d7e17f34eab1d0", {
        method: "GET",
        mode: "cors",
        cache:"no-cache",
        credentials:"same-origin",
        headers:{
           "Content-Type":"application/json"
        },
        redirect:"follow",
        referrerPolicy: "no-referrer",
     });

     console.log(response);
     let body = await response.json();
     return body;
}