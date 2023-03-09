const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      `mongodb+srv://API-festas:i7bgudOQi7WDu9Oq@cluster0.m1cwjc8.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("conectado ao banco!");
  } catch (erro) {
    console.log(`error: ${erro}`);
  }
}

module.exports = main