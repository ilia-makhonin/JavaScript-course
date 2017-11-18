window.onload = function() {

    ChessBoard();

    function ChessBoard() {
                                            //Создаём тег TABLE

        var table_board = document.createElement("table");
        table_board.className = "chess-board";
        document.body.appendChild(table_board);

        var letters = ["", "A", "B", "C", "D", "E", "F", "J", "H"];

                                        //Генерация самой шахматной доски

        for (var i = 1; i <= 9; i++) {

                                        //Генерация строк и их нумерация

            var row = document.createElement("tr");
            table_board.appendChild(row);

            for (var j = 0; j < 9; j++) {

                            //Генерация отдельных клеток, определение их цвета и нумерация столбцов

                if (i < 9) {
                    if (j === 0) {
                        var side_markup = document.createElement("td");
                        side_markup.className = "side-markup";
                        side_markup.innerText = 9 - i;
                        row.appendChild(side_markup);
                    } else {
                        OneCell(i, j, row);
                    }
                } else {
                    LastRow(j, letters, row);
                }
            }
        }
    }
};

                                    //Создаём одну клетку и выбираем ей цвет

function OneCell(i, j, row) {
    var cell = document.createElement("td");

    if (i % 2 === 0 && j % 2 === 0 || i % 2 !== 0 && j % 2 !== 0) {
        cell.className = "cell-white";
    } else {
        cell.className = "cell-black";
    }

    row.appendChild(cell);
}

                            //Создаём последнюю строку с буквенными обозначениями столбцов

function LastRow(j, letters, row) {
    if (j === 0) {
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