var express = require('express');
var router = express.Router();

/* GET users listing. */
let books=[{id:1,bname:'harry',price:123.50},
    {id:1,bname:'harry',price:123.50},
    {id:2,bname:'harry',price:123.50},
    {id:3,bname:'harry',price:123.50}
];
let max=3;
router.route('/')
    .get( function(req, res) {
        res.json(books);
    })
    .post(function (req,res) {
        let book=req.body;
        book.id=++max;
        books.push(book);
        res.json(book);
    });
router.route('/:id')
    .get( function(req, res) {
        let id=req.params.id;
        books.forEach((item)=>{
            if(item.id==id) {
                res.json(item);
                return ;
            }
        })
    })
    .delete(function (req,res) {
        let id=req.params.id;
        let book=null;
        books.forEach((item)=>{
            if(item.id==id) {
                book=item;
            }
        });
        let index=books.indexOf(book);
        books.splice(index,1);
        res.json({});
    })
    .put(function (req,res) {
        let id=req.params.id;
        let bk1=req.body;
        let book=null;
        books.forEach((item)=>{
            if(item.id==id) {
                book=item;
            }
        });
        let index=books.indexOf(book);
        console.log(index+".....");
        books.splice(index,1,bk1);
        //book=bk1;
        res.json(bk1);
    })
module.exports = router;
