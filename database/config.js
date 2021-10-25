const mongoose = require("mongoose");
////////////////////////////////////

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión establecida a la BD');
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de iniciar la base de datos");
  }
};

///////////////////////////////////
module.exports = {
  dbConnection,
};
