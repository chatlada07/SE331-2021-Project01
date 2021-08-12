import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  //receive perPage and page to sent to the request url
  getEvents(perPage, page) {
    return apiClient.get('/passenger?page=' + page + '&size=' + perPage)
  },
  //Added new call
  getEvent(id) {
    return apiClient.get('/passenger/' + id)
  }
}
