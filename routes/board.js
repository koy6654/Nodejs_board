var express = require('express');
var router = express.Router();
var boardList_model = require('../models/boardList');
const { route } = require('.');


// router.get('/', function(req, res, next){
//     var boardList = Board.getBoardList();
//     res.render("board/boardLWist", {boardList: boardList});
// }).get('/write', function(req, res, next){

//     res.render("board/boardWrite");
// }).get('/:id', function(req, res, next){
    
//     console.log("AAA");
//     res.send("AAA");
//     // var boardId = parseInt(req.params.id);
//     // var board = Board.getBoardDetail(boardId);

//     // res.render("board/boardDetail",{board: board});
// });

// module.exports = router;
// /board/write/
// .get만으로도 연결 가능



// use도 사용가능
// router.use((req, res, next){
// })


// copy
router.get('/', function(req, res, next){
    var boardList = boardList_model.getBoardList();
    res.render("board/boardList", {boardList: boardList});
});

// router.<http method>
router.get('/write', function(req, res, next){
    res.render("board/boardWrite");
});


// router.<http method>
router.get('/:id', function(req, res, next){
    var boardId = parseInt(req.params.id);
    var boardList = boardList_model.getBoardDetail(boardId);
    res.render("board/boardDetail", {board: boardList});
});
module.exports = router;
// /board/write/

