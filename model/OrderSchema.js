import mongoose from "mongoose";

const{Schema , model} = mongoose;

const OrderSchema = new Schema({
    productId:{
        type:String,
    },
    quantity:{
        type:String,
    },
    fullAddress:{
        type:String,
    },
    pincode:{
        type:String,
    },
    contact:{
        type:String,
    },
    createdAt:{
        type: Date,
        default: () => Date.now(),
        immutable: true,
    }
})

const orderRecord = model("orderRecord",OrderSchema);
export default orderRecord;