// const mongoose = require("mongoose");
// //basedh
// const connectDatabase = () => {


//   mongoose.connect("mongodb://localhost:27017");
//   // mongoose
//   //   .connect(process.env.DB_URL, {
//   //     useNewUrlParser: true,
//   //     useUnifiedTopology: true,
//   //   })
//   //   .then((data) => {
//   //     console.log(`mongodb  connected with server: ${data.connection.host}`);
//   //   });
// };


// module.exports = connectDatabase;



const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // Gérer l'erreur de connexion ici
  }
};

module.exports = connectDatabase;




//JVuURn4uQO3TBupV