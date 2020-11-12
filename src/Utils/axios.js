import axios from 'axios'

//create instance
const instance = axios.create({
    baseURL:'https://tinder-backend-7860.herokuapp.com'
})

export default instance;