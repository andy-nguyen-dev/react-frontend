import axios from 'axios';

const API_URL = 'http://localhost:3000';

class ApiService {
    getData() {
        // this header resolves a CORS error, when making axios calls to a local backend api
        // more details in this commit: https://github.com/andy-nguyen-dev/nestjs-node-typescript-backend/commit/a78df7fcb89b037e1beca416d13c598b9da72443
        axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        return axios.get(API_URL);
    }
}

export default new ApiService();