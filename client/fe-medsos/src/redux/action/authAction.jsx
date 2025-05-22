import { APISERVICE, config } from "../../utils"


export const fetchProfile = (token) => (dispath) => {
    APISERVICE().get('/auth/me', config(token)).then((response) => {
        dispath({
            type: 'AUTH_PROFILE_SUCCESS',
            payload: {
                data: response.data
            }
        })
    })
    .catch((err) => {
        if (err.response.status == 401) {
            window.location.href = '/login'
        }
        dispath({
            type: 'AUTH_PROFILE_FAIL',
            payload: {
                data: err.response
            }
        })
    })
}