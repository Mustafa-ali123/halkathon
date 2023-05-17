import axios from 'axios'

let apiHandling = axios.create({
        baseURL: 'https://myfakeapi.com/api'
    })

const Get = (endPoint) => {
    return apiHandling.get(endPoint)
}
const GetById = (endPoint, id) => {
    return apiHandling.get(`${endPoint}/${id}`)
}
const Put = (endPoint, body) => {
    return apiHandling.put(`${endPoint}`, body)
}

const Post = (endPoint, body) => {
    return apiHandling.post(`${endPoint}`, body)
}

const Delete = (endPoint, id) => {
    return apiHandling.delete(`${endPoint}`,id)
}

export { Get, Put, Post, GetById, Delete }