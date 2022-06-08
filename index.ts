/* import moralis */
const Moralis = require("moralis/node");
const axios = require('axios');
/* Moralis init code */
const serverUrl = "https://pzpldtlc3eoa.usemoralis.com:2053/server";
const appId = "wnx9T7xAc2y2YifselzzWLR0rZLsFTwXvr4Ii63f";
const masterKey = "TWbep9WwLigbeyoka3UK8OeQ7CUi2QJmWip3ZND4";

const FindQuery = async () => {
    await Moralis.start({ serverUrl, appId, masterKey });
    const OfferNew = Moralis.Object.extend("OfferNew");

    const query = new Moralis.Query("OfferNew");
    const results = await query.find();

console.log(query)
    console.log(results[0].get('matchesAllowed'));
  };

  FindQuery();

