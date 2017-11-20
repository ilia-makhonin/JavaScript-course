var white_figure = [
    "img/figure/white/pawn.png", "img/figure/white/rook.png", "img/figure/white/bishop.png",
    "img/figure/white/knight.png", "img/figure/white/queen.png", "img/figure/white/king.png"
];

var black_figure = [
    "img/figure/black/pawn.png", "img/figure/black/rook.png", "img/figure/black/bishop.png",
    "img/figure/black/knight.png", "img/figure/black/queen.png", "img/figure/black/king.png"
];

var letters = [ "A", "B", "C", "D", "E", "F", "J", "H"];


function Figure() {
    for (var i = 1; i <= 8; i++) {
        for (var j = 0; j < 8; j++) {
            var position = letters[j] + i;
            FigurePosition(i, position);
        }
    }

    var but = document.getElementById("gambit");
    var desc = document.createElement("div");
    desc.className = "description";
    desc.innerText = "Дебют - это начальная стадия шахматной партии. " +
        "Основная задача дебюта, вывести свои фигуры на самые выгодные " +
        "позиции и помещать развитию фигур противника.\n На шахматной доске представлен Гамбит Эванса.";
    document.body.replaceChild(desc, but);
}



function FigurePosition(i, position) {
    var cell_loc = document.getElementById(position);

    WhiteFigure(cell_loc, position);
    BlackFigure(i, cell_loc, position);
}



function WhiteFigure(cell_loc, position) {
    switch (position) {
        case "A2":
            FigureColor(cell_loc, white_figure[0]);
            break;
        case "C2":
            FigureColor(cell_loc, white_figure[0]);
            break;
        case "D2":
            FigureColor(cell_loc, white_figure[0]);
            break;
        case "F2":
            FigureColor(cell_loc, white_figure[0]);
            break;
        case "J2":
            FigureColor(cell_loc, white_figure[0]);
            break;
        case "H2":
            FigureColor(cell_loc, white_figure[0]);
            break;
    }

    if (position == "B4" || position == "E4") {
        FigureColor(cell_loc, white_figure[0]);
    } else if (position == "A1" || position == "H1") {
        FigureColor(cell_loc, white_figure[1]);
    } else if (position == "B1" || position == "F3") {
        FigureColor(cell_loc, white_figure[3]);
    } else if (position =="C1" || position == "C4") {
        FigureColor(cell_loc, white_figure[2]);
    } else if (position == "D1") {
        FigureColor(cell_loc, white_figure[4]);
    } else if (position == "E1") {
        FigureColor(cell_loc, white_figure[5]);
    }

}



function BlackFigure(i, cell_loc, position) {
    if (i === 7 && position != "E7") {
        FigureColor(cell_loc, black_figure[0]);
    } else if (position == "A8" || position == "H8") {
        FigureColor(cell_loc, black_figure[1]);
    } else if (position == "C6" || position == "J8") {
        FigureColor(cell_loc, black_figure[3]);
    } else if (position == "C5" || position == "C8") {
        FigureColor(cell_loc, black_figure[2]);
    } else if (position == "D8") {
        FigureColor(cell_loc, black_figure[4]);
    } else if (position == "E8") {
        FigureColor(cell_loc, black_figure[5]);
    }
}



function FigureColor(cell_loc, figure_type) {
    var img = document.createElement("img");
    img.setAttribute("src", figure_type);
    cell_loc.appendChild(img);
}