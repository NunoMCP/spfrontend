import axios from "axios"

export default axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/itunes.apple.com/",
    headers: {
        "Accept": "application/json"
    }
})
