import { APISERVICE } from "../../utils"


export const fetchMajor = () => (dispath) => {
    dispath({ type: 'MAJOR_INIT' })
    APISERVICE().get('/major').then((response) => {
        dispath({
            type: 'MAJOR_SUCCESS',
            payload: {
                data: response.data?.data
            }
        })
    })
    .catch((err) => {
        if (err.response.status == 401) {
            window.location.href = '/login'
        }
        dispath({
            type: 'MAJOR_FAIL',
            payload: {
                data: err.response
            }
        })
    })
}