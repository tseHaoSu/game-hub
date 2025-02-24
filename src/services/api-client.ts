import axios from "axios";


export default axios.create({

    baseURL: "https://api.rawg.io/api",
    params: {
        key: "78ba6ee231344ff983aae5cb18e9ccf0"
    }
})