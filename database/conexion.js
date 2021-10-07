const mongoose = require('mongoose');


 async function conectBD() {

     try {
         
        await mongoose.connect(process.env.BASEDATOS);
        console.log("Conected...");
     } catch (error) {
        console.log(error);         
     }

}

module.exports = { conectBD }

