import axios from 'axios'

const USER_API_BASE_URL='http://localhost:9898/users'

class ApiService{

    addUser(user){
        return axios.post(""+USER_API_BASE_URL,user)
    }

    fetchUsers(){
        return axios.get(USER_API_BASE_URL)
    }

    fetchUserById(userId){
        return axios.get(USER_API_BASE_URL+'/'+userId)
    }

    editUser(user){
        return axios.put(USER_API_BASE_URL+'/'+user.id,user)
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL+'/'+userId)
    }
}

export default new ApiService()