import * as http from 'http';
export default class BackendService {

    getEvents() {
        http.getJSON("https://pickup-app-backend.herokuapp.com/api/events").then(result => {
            return result.results;
        }, error => {
            console.log(error);
        });
    }
}
