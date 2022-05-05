import axios from "axios";

const PROFILE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/profiles';

class ProfileService {

    getAllProfiles() {
        return axios.get(PROFILE_BASE_REST_API_URL);
    }

    getAllProgresses(){
        return axios.get(PROFILE_BASE_REST_API_URL+"/progress")
    }

}

export default new ProfileService();