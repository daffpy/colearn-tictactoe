"use client"

import { useState } from "react"

export default function TicTacToeGame({grid, isWin, setResult}){
    const initialBoard = []
    let currRow = []

    for(let i = 0; i < grid; i++){
        for(let x = 0; x < grid; x++){
            // set titik default
            if(i == Math.floor(grid/2) && x == Math.floor(grid/2)){
                currRow.push("O")
            }else{
                currRow.push("")
            }
            
        }
        initialBoard.push(currRow)
        currRow = []
    }
    const [board, setBoard] = useState(initialBoard)

    function findAllEmptyCell(board) {
        const emptyCells = [];

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                if (board[r][c] === "") {
                    emptyCells.push({ row: r, col: c });
                }
            }
        }

        return emptyCells;
    }

    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function fillRandomCell(board){
        const emptyBoard = findAllEmptyCell(board)
        if(emptyBoard.length === 0){
            setResult("draw")
            return
        }
        const randomSeq = emptyBoard[getRandomInt(0,emptyBoard.length)]

        const col = randomSeq["col"]
        const row = randomSeq["row"]

        const newArray = board.map(rows => [...rows]);
        newArray[row][col] = "O"

        setBoard(newArray)
        if(checkOWin(newArray,row,col)){
            setResult("lost");
            return;
        }

        const remaining = findAllEmptyCell(newArray);
        if(remaining.length === 0){
            setResult("draw");
        }

        return newArray

    }

    function checkXWin(array, row, col) {
        // console.log(array, row, col)
        const rowWin = array[row].every(v => v === "X");
        const colWin = array.map(r => r[col]).every(v => v === "X");
        let mainDiagValid = true
        let antiDiagValid = true
        for(let x=0; x < array.length; x++){
            // console.log(array[x][x])
            if(array[x][x] != "X"){
                mainDiagValid = false
                break;
            }
        }
        for(let x=0; x < array.length; x++){
            if(array[x][array.length - 1 - x] != "X"){
                antiDiagValid = false
                break;
            }
        }
        // console.log(rowWin, colWin, mainDiagValid, antiDiagValid)

        return rowWin || colWin || mainDiagValid || antiDiagValid;
    }
    function checkOWin(array, row, col) {
        const rowWin = array[row].every(v => v === "O");
        const colWin = array.map(r => r[col]).every(v => v === "O");
        let mainDiagValid = true
        let antiDiagValid = true
        for(let x=0; x < array.length; x++){
            if(array[x][x] != "O"){
                mainDiagValid = false
                break;
            }
        }
        for(let x=0; x < array.length; x++){
            if(array[x][array.length - 1 - x] != "O"){
                antiDiagValid = false
                break;
            }
        }

        return rowWin || colWin || mainDiagValid || antiDiagValid;
    }

    // karena issue tailwind engga bisa dynamic class import 
    const gridVariants = {
        3: "grid-cols-3 grid-rows-3",
        4: "grid-cols-4 grid-rows-4",
        5: "grid-cols-5 grid-rows-5",
        9: "grid-cols-9 grid-rows-9",
    }
    return(
        <div className={`max-w-[400px] mx-auto text-red-600 grid ${gridVariants[grid]} mx-8 mt-10 border border-blue-500`}>
            {board.map((row,rIdx)=>
                row.map((col, cIdx)=>{
                    return(
                        <div key={rIdx + cIdx} className={`text-yellow-600 border ${isWin === "playing" ? "hover:scale-[1.15] duration-300" : ""}  bg-[#F9F8F6] border-blue-600 flex justify-center items-center aspect-square`}
                        onClick={() => {
                            if (board[rIdx][cIdx] !== "") return;
                            if (isWin !== "playing") return;
                            const newArray = board.map(row => [...row]);
                            newArray[rIdx][cIdx] = "X";

                            setBoard(newArray);           
                            if(checkXWin(newArray,rIdx,cIdx)){
                                setResult("won")
                                return;
                            }
                            fillRandomCell(newArray);
                        }}
                        >
                            {col}
                        </div>
                        
                    )

                })

            )}
        </div>
    )
}