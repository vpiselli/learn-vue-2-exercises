import axios from "axios";

class Status {
    static find(id) {
        return axios.get('/statuses/' + id);
    }

    static async all(then) {
        const { data } = await axios.get('/statuses');
        return then(data);
    }
    // Laracast Tutorail version:
    // static all(then) {
    //     return axios.get('/statuses')
    //         .then(({data}) => then(data));
    // }
}

export default Status;