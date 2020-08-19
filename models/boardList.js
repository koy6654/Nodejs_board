let boardList = [
    {
        id : 1,
        title : '게시글 1',
        content : '내용 1',
        author : '권오영',
        createAt : '2020-08-19 14:32:32'
    },
    {
        id : 2,
        title : '게시글 2',
        content : '내용 2',
        author : '김만수',
        createAt : '2020-08-19 14:40:00'
    },
    {
        id : 3,
        title : '게시글 3',
        content : '내용 3',
        author : '진에어',
        createAt : '2020-08-19 15:00:00'
    }
]

module.exports = {
    // getBoardList:() => {
    //     return Board;
    // }
    getBoardList: function () {
        return boardList;
    },

    getBoardDetail: (boardId)=>{
        let board = null;

        for (let _board of boardList)
        {
            if(_board.id === boardId)
            {
                board = _board;
                return board;
            }
        }
    }
}