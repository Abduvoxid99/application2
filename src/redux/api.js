import axios from "axios"

let httpClient = null

const {REACT_APP_API_ROOT} = process.env

const api = () => {

    if (!httpClient) {
        const urlParams = new URLSearchParams(window.location.search)
        const accessToken = urlParams.get("oauth")
        const ctoken = urlParams.get("ctoken")
        const instance = axios.create({
            baseURL: REACT_APP_API_ROOT,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
        httpClient = {
            getProduct: () => instance.get(`/product?ctoken=${ctoken}`),
            complete: ({application_id, branch_code , product_item_id }) => instance.post(`/complete?ctoken=${ctoken}`, {
                application_id,
                branch_code,
                product_item_id
            })
        }
    }
    return httpClient
}

export default api()