var books = ["last of the breed", 'mistborn'];
var id = 0;

module.exports = {
    create: (req, res, next) => {
        
        id++
    },
    read: (req, res, next) => {
        res.status(200).send(books);
    },
    update: (req, res, next) => {

    },
    delete: (req, res, next) => {

    }

}