import api from '../index'
import urls from './urls'
const header = {
    'Authorization': 'Client-ID xxxxxxx'
    
}

export default {
    viewPhotos (params) {
        // return出去了一个promise
        return api.get(urls.photos, params, header)
    }
}