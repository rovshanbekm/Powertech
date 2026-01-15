import { DOMAIN } from "../constants";
import axios from "axios";

const request = axios.create({
    baseURL: DOMAIN,
    headers: { "Content-Type": "application/json" },
});



export default request;