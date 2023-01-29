import {axiosService} from "./axiosService";

const postService={
    // getByUseId:(userId)=>axiosService.get(`/posts?userId=${userId}`)
    getByUseId:(userId)=>axiosService.get(`/posts`,{params:{userId: userId}})
}
export {postService};