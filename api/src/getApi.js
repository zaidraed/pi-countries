const { Country, Activity } = require("./db.js");
const axios = require("axios");
let downloadDB = async () => {
    let country = await axios.get("https://restcountries.com/v3.1/all");
    let api = await country.data.map((c) => {
    return {
        name: c.name.official,
        cca3: c.cca3,
        capital: c.capital ? c.capital.toString() : "No capital knowed",
        subregion: c.subregion ? c.subregion : "No subregion knowed",
        area: parseInt(c.area) ? parseInt(c.area) : 0,
        population: parseInt(c.population) ? parseInt(c.population) : 0,
        continents: c.continents
        ? c.continents.toString(): "No subregion knowed",
        flags: c.flags.png,
    };
    });
  //        console.log(api)
    const push = () => {api.map((i) => {Country.findOrCreate({
        where: {
            name: i.name,
            cca3: i.cca3
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
    //return api
    push();
};
downloadDB();
// const getDbInfo = async () => {
//   await downloadDB()
//   const aux = await Country.findAll({
//       include: {
//           model: Activity,
//           attributes: ['name', 'difficulty', 'duration', 'season'],
//           through: {
//               attributes: [],
//           }
//       }
//   })
//   return aux
// }
// const getActivities = async () => {
//   const get = await Activity.findAll()
//   return get;
// }


module.exports = {downloadDB}
