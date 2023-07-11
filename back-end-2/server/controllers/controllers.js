const realEstateDb = require('../db.json');
const houseId = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(realEstateDb);
    },

    deleteHouse: (req, res) => {
     let index = realEstateDb.findIndex(ele => ele.id === +req.params.id);
     realEstateDb.splice(index, 1)
     res.status(200).send(realEstateDb);
    },

    createHouse: (req, res) => {
        const{addres, price, imageURL} = req.body;

        realEstateDb.push({
            id: houseId,
            address: addres,
            price: price,
            imageURL: imageURL
        })

        houseId++
        res.status(200).send(realEstateDb);
    },

    updateHouse: (req, res) => {
        const {id} =req.parmas;
        const {type} = req.body;
        let houseIndex = realEstateDb.findIndex(elem => +elem.id === +id);

        if(realEstateDb[houseIndex].price <= 10000 && type === 'minus') {
            realEstateDb[houseIndex].price = 0;
            res.status(200).send(realEstateDb);
        }else if (type === 'plus') {
            realEstateDb[houseIndex].price += 10000
            res.status(200).send(realEstateDb);
        }else if(type === 'minus') {
            realEstateDb[houseIndex].price -= 10000
            res.status(200).send(realEstateDb);
        }else {
            res.sendStatus(400)
        }
    }
}