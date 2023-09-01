import axios from "axios";



const instance = axios.create ({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "f5878ae5-3f8e-41ea-9a8b-bb321dac7124"
    } 
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
        return response.data;
});
},
follow(userId) {
    return instance.post(`follow/${userId}`)
},
unfollow(userId) {
   return instance.delete(`follow/${userId}`)
},
getProfile(userId) {
   return instance.get(`profile/` + userId)
    
  },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }

}


export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
    .then(response => {
        return response.data;
});
}
