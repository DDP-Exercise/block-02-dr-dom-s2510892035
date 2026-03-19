"use strict";
/*******************************************************
 *     tictactoe.js - 50p.
 *
 *     When you fought Dr. DOM today, to me it looked like two super heroes playing
 *     TIC TAC TOE! At times, it was hard to tell, who would have won which fight...
 *
 *     To solve my misfortune, please write a little program, that takes a (hard-coded)
 *     two-dimensional Array (BATTLEFIELD) and checks if one of the two opponents has
 *     won the battle, and if so, how (vertical, horizontal, main-diagonal, anti-diagonal).
 *
 *     Since you have already had a couple of encounters of different severities, I simply
 *     can't translate all your battles to TIC TAC TOE matches of the same size.
 *     For that reason, your little program should be written in a way, that it can
 *     scale with the size of the battlefield (3x3, 4x4, ..., nxn).
 *
 *     Bratlsoft - 2026-03-15
 *******************************************************/


// const BATTLEFIELD =
//     [
//         [null, X, X],
//         [X, O, null],
//         [O, O, O],
//     ];
// const BATTLEFIELD =
//     [
//         [O, O, X],
//         [X, O, X],
//         [O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X],
//         [X, O, X],
//         [O, X, O],
//     ];
//
// const BATTLEFIELD =
//     [
//         [O, X, X, X],
//         [X, O, X, O],
//         [O, X, O, X],
//         [X, O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X, X, null],
//         [X, O, X, O, O],
//         [O, X, O, null,  X],
//         [X, null, X, O, O],
//         [X, null, O, X, O],
//     ];

//TODO: Check if the battle is over, and if so, announce the winner!

// Check Horizontal
// Check Vertical
// Check Main Diagonal
// Check Anti Diagonal



{
    const X = "Savior (X)";
    const O = "Dr. DOM (O)";

    const spielfeld = [
        [O, X, O],
        [X, X, X],
        [O, O, X],
    ];

    let n = spielfeld.length;
    let gewinner = null;
    let art = "";

    function alleGleich(array) {
        return array.every(feld => feld !== null && feld === array[0]);
    }

    // Horizontal
    for (let zeile of spielfeld) {
        if (alleGleich(zeile)) { gewinner = zeile[0]; art = "horizontal"; }
    }

    // Vertical
    for (let spalte = 0; spalte < n; spalte++) {
        let spaltenWerte = [];
        for (let zeile = 0; zeile < n; zeile++) { spaltenWerte.push(spielfeld[zeile][spalte]); }
        if (alleGleich(spaltenWerte)) { gewinner = spaltenWerte[0]; art = "vertikal"; }
    }

    // Diagonals
    let diag1 = [], diag2 = [];
    for (let i = 0; i < n; i++) {
        diag1.push(spielfeld[i][i]);
        diag2.push(spielfeld[i][n - 1 - i]);
    }
    if (alleGleich(diag1)) { gewinner = diag1[0]; art = "Hauptdiagonale"; }
    if (alleGleich(diag2)) { gewinner = diag2[0]; art = "Gegendiagonale"; }

    // Result
    if (gewinner) console.log(gewinner + " gewinnt (" + art + ")");
    else console.log("Kein Gewinner");
}