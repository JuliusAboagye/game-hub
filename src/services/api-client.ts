import axios from "axios";

export interface FetchResponse<T>{
    count:number;
    results:T[]
}

export default axios.create({baseURL:"https://api.rawg.io/api",params:{key:"5a507caf09064435b71c930072dfa1c6"}})    