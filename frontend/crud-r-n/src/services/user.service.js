import {urls} from "../constants";
import {axiosService} from "./axios.service";


const userService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data),
    createUser: (user) => axiosService.post(urls.create, user),
    updateById: (id, data) => axiosService.put(`${urls.users}/${id}`, data),
    deleteById: (id) => axiosService.delete(`${urls.users}/${id}`),
}

export {
    userService
}