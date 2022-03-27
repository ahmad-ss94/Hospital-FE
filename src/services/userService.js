import http from "../services/httpService";
import config from "../config.json";

const apiEndPoint = config.SERVER_URL +"/Authenticate";

export function login(username, password){
    return http.post(apiEndPoint+'login',{username, password});
}