import axios from "axios";


const clientId = "20f99def25cb4596b777ac3889ccecee";
const redirectUri = "http://localhost:3000";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=user-read-private%20user-library-read%20user-read-email&show_dialog=true`;


export {AUTH_URL};

const apiClient = axios.create({
    baseURL:"https://api.spotify.com/v1/",
});



export const setClientToken = (token) =>{
    if (!token) {
        console.error("No token found. Cannot set Authorization header.");
        return;
    }

    window.localStorage.setItem("token", token);

   

    apiClient.interceptors.request.use(async function(config) {
        config.headers.Authorization =`Bearer ${token}`;
        return config ;
    });
};


export default apiClient;