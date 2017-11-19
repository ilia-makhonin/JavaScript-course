var white_figure = [
    "figure/white/pawn.png", "figure/white/rook.png", "figure/white/bishop.png",
    "figure/white/knight.png", "figure/white/queen.png", "figure/white/king.png"
];

var black_figure = [
    "figure/black/pawn.png", "figure/black/rook.png", "figure/black/bishop.png",
    "figure/black/knight.png", "figure/black/queen.png", "figure/black/king.png"
];

var letters = [ "A", "B", "C", "D", "E", "F", "J", "H"];


Figure(black_figure);

function Figure() {
   
    for (var j = 0; j < 8; j++) {
        var num_position = j + 1;

        for (var l = 0; l < 8; l++) {
            var position = letters[l] + num_position;

            if (num_position === 2) {
                FigureColor(position, white_figure, 0);
            } else if (num_position === 7) {
                FigureColor(position, black_figure, 0);
            }
        }
    }

    var but = document.getElementById("gambit");
    document.body.removeChild(but);
}

function FigureColor(position, color, num) {
    var figure = document.getElementById(position);
    var img = document.createElement("img");
    img.setAttribute("src", color[num]);
    figure.appendChild(img);
}