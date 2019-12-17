import axios from 'axios'
import erros from './lang_es.json'

let axiosInst = axios.create({
  baseURL: 'https://app-hotels-test.herokuapp.com'
})

/**
 * Intersepta los errores con status 401 (sin autorizacion)
 * para realizar una accion de logout
*/
axiosInst.interceptors.response.use(function (response) {
  return response
}, function (error) {
  /* eslint no-param-reassign: 0 */
  error.response.message = 'Lo sentimos ha ocurrido un error'

  if (error.response.status === 400) {
    if (error.response.data.res === 'bad') {
      error.response.message = error.response.data.msj
    }

    // mapeamos errores
    if (erros[error.response.data.code]) {
      error.response.message = erros[error.response.data.code]
    }
  }
  return Promise.reject(error)
})

export default axiosInst
