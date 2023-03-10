const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      `mongodb+srv://API-FESTAS:1QlpltSaUmusnG9c@festas.fozorws.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("conectado ao banco!");
  } catch (erro) {
    console.log(`error: ${erro}`);
  }
}

module.exports = main