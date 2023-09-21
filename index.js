import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import sellRecord from "./model/SellWoolRecord.js";
import orderRecord from "./model/OrderSchema.js";

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

mongoose.connect("mongodb+srv://harsh:harsh@<password>.fiupnla.mongodb.net/sellWool?retryWrites=true&w=majority");


async function uploaderSeller(req,res){
    try{
        const article=await sellRecord.create({
            farmerName: req.body.name,
            phone: req.body.phone,
            woolColor: req.body.woolColor,
            state: req.body.stateName,
            woolType: req.body.woolQuality,
            woolQuantity: req.body.woolQuantity,
            price: req.body.price,
            shortDescription: req.body.shortDesc,
        })
        console.log(article);
        res.render("thankuPage");
    }
    catch(err){
        console.log(err);
    }
}


async function fetchAndProcessUsers(req,res){
    try{
        const users = await sellRecord.find({});
        res.render('marketplace',{listTitle:"Harsh" , newListItems:users});
    }catch(err){
        console.log(err);
    }
}


async function uploaderBuyer(req,res){
    try{
        const article=await orderRecord.create({
            productId: req.body.productId,
            quantity: req.body.quantity,
            fullAddress: req.body.fullAddress,
            pincode: req.body.pinCode,
            contact: req.body.contactNumber,
        })
        console.log(article);
        res.render("orderPlaced");
    }
    catch(err){
        console.log(err);
    }
}

async function fetchTracking(req,res){
    try{
        const users = await orderRecord.find({});
        res.render('tracking',{listTitle:"Harsh" , newListItems:users});
    }catch(err){
        console.log(err);
    }
}

//database




app.get("/" ,function(req,res){
    res.render("home");
})
app.post("/" ,function(req,res){
    res.render("home");
})
app.get("/newsAndTrends" ,function(req,res){
    res.render("newsAndTrends");
})

app.get("/processIntro", function(req,res){
    res.render("processIntro");
})

app.post("/processIntro", function(req,res){
    res.render("processIntro");
})
app.get("/shearing", function(req,res){
    res.render("shearing");
})
app.post("/shearing", function(req,res){
    res.render("shearing");
})
app.get("/sorting", function(req,res){
    res.render("sorting");
})
app.post("/sorting", function(req,res){
    res.render("sorting");
})
app.get("/dyeing", function(req,res){
    res.render("dyeing");
})
app.post("/dyeing", function(req,res){
    res.render("dyeing");
})

app.get("/tempAndHumid", function(req,res){
    res.render("tempAndHumid");
})
app.post("/tempAndHumid", function(req,res){
    res.render("tempAndHumid");
})
app.get("/cleanEnv", function(req,res){
    res.render("cleanEnv");
})
app.post("/cleanEnv", function(req,res){
    res.render("cleanEnv");
})
app.get("/pestControl", function(req,res){
    res.render("pestControl");
})
app.post("/pestControl", function(req,res){
    res.render("pestControl");
})
app.get("/packing", function(req,res){
    res.render("packing");
})
app.post("/packing", function(req,res){
    res.render("packing");
})
app.get("/organization", function(req,res){
    res.render("organization");
})
app.post("/organization", function(req,res){
    res.render("organization");
})
app.get("/security", function(req,res){
    res.render("security");
})
app.post("/security", function(req,res){
    res.render("security");
})





app.get("/storageIntro" ,function(req,res){
    res.render("storageIntro");
})

app.post("/storageIntro" ,function(req,res){
    res.render("storageIntro");
})

















// database






app.get("/marketplace",fetchAndProcessUsers);

app.post("/marketplace",fetchAndProcessUsers);




app.get("/seller" ,function(req,res){
    res.render("seller");
})
app.post("/seller", function(req,res){
    res.render("seller");
});
app.post("/thanku",uploaderSeller);

app.get("/buyer" ,function(req,res){
    res.render("order");
});
app.post("/buyer" ,function(req,res){
    res.render("order");
});



app.post("/orderPlaced",uploaderBuyer);
app.get("/tracking",fetchTracking);

// const article = await sellRecord.create({
//     farmerName:farmerName,
// })
// console.log('article', article);




app.listen(3000,function(){
    console.log("The server is started at port 3000");
})
