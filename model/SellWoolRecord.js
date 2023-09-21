import mongoose from "mongoose";

const{Schema , model} = mongoose;

const wollSchema = new Schema({
    farmerName:{
        type:String,
    },
    phone:{
        type:String,
    },
    woolType:{
        type:String,
    },
    woolQuantity:{
        type : String,
    },
    woolColor:{
        type:String,
    },
    state:{
        type: String,
    },
    price:{
        type: String,
    },
    shortDescription:{
        type: String,
    },
})

const sellRecord = model("sellRecord",wollSchema);
export default sellRecord;