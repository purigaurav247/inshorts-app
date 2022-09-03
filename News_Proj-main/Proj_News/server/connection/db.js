import mongoose from 'mongoose';


const Connection =async ()=>{
    try{
    const URL = `mongodb+srv://himanshu:himanshu11@clone-inshort.4lwcp.mongodb.net/PROJECT0?retryWrites=true&w=majority`

    await mongoose.connect(URL,{useNewUrlParser: true})
    console.log('Connection succesfully');
    } catch (error){
        console.log('Error while connecting with Database',error);
    }

}

export default Connection;
