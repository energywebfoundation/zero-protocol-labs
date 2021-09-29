import axios  from "axios";

const ApiPageEffects = axios.create({
    baseURL : 'http://localhost:3333/api/'
})

export default ApiPageEffects;