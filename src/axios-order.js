import axios from 'axios'

const instante = axios.create({
    baseURL: 'https://burger-project-d09d3.firebaseio.com/'
})

export default instante