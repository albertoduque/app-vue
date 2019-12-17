import querystring from 'querystring'
import conn from './client'

export default {
  saveProfileData (params) {
    return conn.post('/apiv3/user/info', params, {
      withCredentials: true
    })
  },

  getCardSummary (params) {
    let queryParams = querystring.stringify(params)
    return conn.get(`/apiv3/card/summary?${queryParams}`)
  },
  
  createChatSynapse (params) {
    return conn.post('/apiv3/chat/chat-synapse', params, {
      withCredentials: true
    })
  },
  finishActiveChat () {
    return conn.delete('/apiv3/pending-product', {
      withCredentials: true
    })
  },
  getCities () {
    return conn.get('/cities')
  },
}

function convertToWebForm (params) {
  let formData = new URLSearchParams()
  for (let key in params) {
    if (params[key]) {
      formData.append(key, params[key])
    }
  }
  return formData
}
