import axios from "axios";
import http from './http-common';

class LoginService
{

    get(id)
    {
        return http.get(`/login/${id}`);
    }
    create(data)
    {
           return http.post("/login",data);
    }

}
export default new LoginService();