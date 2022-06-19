const { Country, Activity } = require("./db.js");
const axios = require("axios");
let downloadDB = async () => {
    let country = await axios.get("https://restcountries.com/v3.1/all");
    let api = await country.data.map((c) => {
    return {
        name: c.translations.spa.official,
        id: c.cca3,
        capital: c.capital ? c.capital.toString() : "No capital knowed",
        subregion: c.subregion ? c.subregion : "No subregion knowed",
        area: parseInt(c.area) ? parseInt(c.area) : 0,
        population: parseInt(c.population) ? parseInt(c.population) : 0,
        continents: c.region
        ? c.region.toString(): "No subregion knowed",
        flags: c.flags.png,
    };
    });
  //        console.log(api)
    const push = () => {api.map((i) => {Country.findOrCreate({
        where: {
            name: i.name,
            id: i.id
        },
            defaults: {
            capital: i.capital,
            subregion: i.subregion,
            area: i.area,
            population: i.population,
            continents: i.continents,
            flags: i.flags,
        },
        }).catch((err) => {
        console.log(err);
        });
    });
    };

    push();
};
downloadDB();


module.exports = {downloadDB}
