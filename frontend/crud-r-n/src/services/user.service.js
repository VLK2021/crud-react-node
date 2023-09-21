import {urls} from "../constants";
import {axiosService} from "./axios.service";


 const userService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data),
    createUser: (user) => axiosService.post(urls.create, user),
}

export {
     userService
}