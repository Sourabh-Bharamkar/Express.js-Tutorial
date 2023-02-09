
const path = require('path')
const fs = require('fs');
const { json } = require('body-parser');

const rootDir = path.dirname(process.mainModule.filename);

const p = path.join(rootDir, 'data', '/products.json');

const getProductsFromFile = (cb) => {

    fs.readFile(p, (err, fileContent) => {
        if (err || fileContent == '') {
            cb([]);
        }
        else {
            cb(JSON.parse(fileContent))
        }

    })
}

module.exports = class Product {

    constructor(t) {
        this.title = t;

    }

    save() {
        getProductsFromFile((products) => {
            products.push(this);

            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);

            })
        });

    }


    static fetchAll(cb) {
        getProductsFromFile(cb);
    }


}