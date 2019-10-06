class TicTacToe {
    constructor() {
        this._matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
          ];
        this._currentPlayer = "x";
        this._spaceCount = 9;
        this._winner = null;
    }

    getCurrentPlayerSymbol() {
        return this._currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this._matrix[rowIndex][columnIndex]!=null) {
            return; 
        }
        this._matrix [rowIndex][columnIndex]=this._currentPlayer;
        for (var i=0;i<3;i++) {
            if (this._matrix[i][0]===this._matrix[i][1]===this._matrix[i][2]) {
                this._winner=this._currentPlayer;
            }
        }
        for (var i=0;i<3;i++) {
            if (this._matrix[0][i]===this._matrix[1][i]===this._matrix[2][i]) {
                this._winner=this._currentPlayer;
            }
        }
        if (this._matrix[0][0]===this._matrix[1][1]===this._matrix[2][2]) {
            this._winner=this._currentPlayer;
        }
        if (this._matrix[0][2]===this._matrix[1][1]===this._matrix[2][0]) {
            this._winner=this._currentPlayer;
        }
        this._spaceCount--;
        this._currentPlayer=(this._currentPlayer=="x")?"o":"x";
    }

    isFinished() {
        return this._winner!=null || this.isDraw();
    }

    getWinner() {
        return this._winner;
    }

    noMoreTurns() {
        return this._spaceCount<1;
    }

    isDraw() {
        var state = this.noMoreTurns() && this.getWinner()==null;

        for (var i=0;i<3;i++) {
            if (this._matrix[i][0]===this._matrix[i][1]===this._matrix[i][2]) {
                return false;
            }
        }
        for (var i=0;i<3;i++) {
            if (this._matrix[0][i]===this._matrix[1][i]===this._matrix[2][i]) {
                return false;
            }
        }
        if (this._matrix[0][0]===this._matrix[1][1]===this._matrix[2][2]) {
            return false;
        }
        if (this._matrix[0][2]===this._matrix[1][1]===this._matrix[2][0]) {
            return false;
        }

        return state;
    }

    getFieldValue(rowIndex, colIndex) {
        return this._matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
