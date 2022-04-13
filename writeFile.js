//import fs from "fs";

const { default: axios } = require("axios");

//let infotxt;
axios('https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326')
        .then(response => response.data)
        .then(data => {
            const script_meli = data.results.map(el => {
                return `${el.id}-${el.title}-${el.category_id}-${el.condition}`;
            }).join('\n');


 
const fs = require('fs');
 fs.writeFileSync('items.txt', script_meli) 

     console.log("Succesfull");
    })