import axios from 'axios';

const KEY = 'AIzaSyA3MYV1ppqxGWXAcIBaPnpAhU3X8A62usU';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }

});