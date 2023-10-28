import axios from "axios"

export const getData =async (user)=>{
    try {
        let res = await axios.get(`${process.env.REACT_APP_API_LINK}/${user}/repos`)
        res = res?.data;
        return {issue: false, data: res}
    } catch (error) {
        return{issue: true, data: error.message}
    }
}