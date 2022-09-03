import { data } from './constant/data.js';
import  News from './model/news.js';



const DefaultData=async ()=>{
    try{
        await News.deleteMany({});
        await News.insertMany(data);
        console.log('Data import Succesfully ');

    }catch (error){
        console.log('Error',error.message);

    }
}

export default DefaultData;