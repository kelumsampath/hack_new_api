const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const schema = mongoose.Schema;

const driverrouteSchema = new schema({
    startlang:{type:String,required:false},
    startlong:{type:String,required:false},
    endlang:{type:String,required:false},
    endlong:{type:String,required:false},
    drivername:{type:String,required:false},
});

const driverroutemodel = module.exports = mongoose.model("driverroutemodel",driverrouteSchema);
module.exports.droutesave = function(route,callback){
    //console.log(route);
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("dcdc", salt, function(err, hash) {
            if(err){
                throw err;
            }else{
                route.save(err, callback);
               
                
            }
        });
    });

};