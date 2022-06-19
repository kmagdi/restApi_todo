import axios from 'axios';

export const readData=async (url,fc) => {
    try{
        const resp = await axios.get(url)
        fc(resp.data)
      }catch(err){
        console.log(err)
      }
      
  }
