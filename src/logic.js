function findPossibleMoves(position) {
    let column = position[0];
    let row = position[1];
    let possibleMoves = [];
    let rows=[];
    let cols=[];
    
    // rows and columns for all eight possible moves
    var possibleColumns = [column - 2, column - 1, column + 1, column + 2];
    var possibleRows = [row - 2, row - 1, row + 1, row + 2];
    
    // check all eight possible moves and only add to array if on the board
    for (var i = 0; i < possibleColumns.length; i++) {
    if (possibleColumns[i] > 0 && possibleColumns[i] < 9) {
    for (var j = 0; j < possibleRows.length; j++) {
    if (possibleRows[j] > 0 && possibleRows[j] < 9) {
    cols.push(possibleColumns[i]); rows.push(  possibleRows[j]);
    }
    }
    }
    }
    possibleMoves.push(rows);
    possibleMoves.push(cols);
    return possibleMoves;
    }
    export default findPossibleMoves;
    