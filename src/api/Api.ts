import { apiClient } from "../utils/apiClient";

export const getBoardItem = async () => {
  try{
    const { data } = await apiClient.get('https://gcinside.herokuapp.com/gallery')
    return { data };
  } catch (e: any){
    console.log(e);
  }
}