window.onload = function() {

    ChessBoard();

};


function ChessBoard() {
                                            //Создаём тег TABLE

    var table_board = document.createElement("table");
    table_board.className = "chess-board";
    document.body.appendChild(table_board);

    var letters = ["", "A", "B", "C", "D", "E", "F", "J", "H"];

                                        //Генерация шахматной доски

    for (var i = 0; i < 10; i++) {
        var row = document.createElement("tr");
        table_board.appendChild(row);

        for (var j = 0; j < 10; j++) {
            if (i === 0 || i === 9) {
                LettersRow(j, letters, row);
            } else {
                BoardCell(i, j, row, letters);
            }
        }
    }
}

                                        //Создаём доску и номеруем строки

function BoardCell(i, j, row, letters) {
    if (j === 0 || j === 9) {
        var side_markup = document.createElement("td");
        side_markup.className = "side-markup";
        side_markup.innerText = 9 - i;
        row.appendChild(side_markup);
    } else {
        OneCell(i, j, row, letters);
    }
}

                            //Создаём первую и последнюю строки с буквенными обозначениями столбцов

function LettersRow(j, letters, row) {
    if (j === 0 || j === 9) {
        var angle = document.createElement("td");
        angle.className = "angle";
        row.appendChild(angle);
    } else {
        var bottom_markup = document.createElement("td");
        bottom_markup.className ="bottom-markup";
        bottom_markup.innerText = letters[j];
        row.appendChild(bottom_markup);
    }
}

                                    //Создаём одну клетку, присваиваем id и выбираем ей цвет

function OneCell(i, j, row, letters) {
    var cell_id = letters[j] + (9 - i);

    var cell = document.createElement("td");
    cell.id = cell_id;

    if (i % 2 === 0 && j % 2 === 0 || i % 2 !== 0 && j % 2 !== 0) {
        cell.className = "cell-white";
    } else {
        cell.className = "cell-black";
    }

    row.appendChild(cell);
}