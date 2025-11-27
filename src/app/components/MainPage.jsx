"use client"

import localFont from 'next/font/local'
import TicTacToeGame from './TicTacToe'
import { GameStateAlert } from './Alert'
import { useState } from 'react'


const bitcount = localFont({
  src: '../fonts/BitcountGridSingle-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf',
})
 

export default function MainPageLayout(){

    const [gridChoice, setGrid] = useState(0)
    const [isWin, setResult] = useState("playing")
    
    return(
        <div className={`${bitcount.className} flex justify-center`}>
            <div className="mt-10 text-center">
                <div className="mx-3 text-3xl lg:text-4xl text-blue-500 font-semibold hover:scale-[1.1] lg:hover:scale-[1.2] duration-300">
                    Co-Learn Tic-Tac-Toe
                </div>
                <div className="lg:text-lg mt-3 text-base mx-8 text-left text-yellow-600 font-medium">
                    <div className='text-center'>
                        wanna have some fun? try playing this tic-tac-toe against me!
                    </div>
                    <div className='mt-10 text-base text-blue-500 flex flex-col lg:flex-row gap-4'>
                        <div>
                            &gt; choose grid amount: 
                        </div>
                        
                        <div className='flex gap-5'>
                            <div className={`hover:text-yellow-600 ${gridChoice == 3 ? "text-yellow-600" : ""} ${gridChoice != 3 && gridChoice != 0 ? "pointer-events-none opacity-50" : "cursor-pointer"}`}
                            onClick={()=>{
                                setGrid(3)
                            }}
                            >
                                3x3
                            </div>
                            <div className={`hover:text-yellow-600 ${gridChoice == 4 ? "text-yellow-600" : ""} ${gridChoice != 4 && gridChoice != 0 ? "pointer-events-none opacity-50" : "cursor-pointer"}`}
                            onClick={()=>{
                                setGrid(4)
                            }}
                            >
                                4x4
                            </div>
                            <div className={`hover:text-yellow-600 ${gridChoice == 5 ? "text-yellow-600" : ""} ${gridChoice != 5 && gridChoice != 0 ? "pointer-events-none opacity-50" : "cursor-pointer"}`}
                            onClick={()=>{
                                setGrid(5)
                            }}
                            >
                                5x5
                            </div>
                            <div className={`hover:text-yellow-600 ${gridChoice == 9 ? "text-yellow-600" : ""} ${gridChoice != 9 && gridChoice != 0 ? "pointer-events-none opacity-50" : "cursor-pointer"}`}
                            onClick={()=>{
                                setGrid(9)
                            }}
                            >
                                9x9
                            </div>

                        </div>

                    </div>
                    {
                    gridChoice != 0 ?
                    <>
                    <div className='flex justify-center'>
                        <div>
                            <div className='w-fit py-2 px-4 text-base mt-5 text-yellow-600 border-[1.5] border-dashed'>
                            O = <span className='text-blue-500'>Me</span>
                            <br/>
                            X = <span className='text-blue-500'>You</span>
                        </div>
                        </div>
                        
                    </div>
                    <div>
                        <GameStateAlert isWin={isWin} setGrid={setGrid} setResult={setResult}/>
                        <TicTacToeGame grid={gridChoice} isWin={isWin} setResult={setResult}/>
                    </div>
                    
                    
                    </>
                    
                    : null
                }
                </div>
                <div className={`text-blue-500 mt-5 mb-5 text-base tracking-tight ${gridChoice === 0 ? "absolute left-1/2 -translate-x-1/2 bottom-0" : ""}`}>
                    made gracefully by <span className='font-semibold'>Satria Daffa</span>
                </div>
               
                
            </div>

        
        </div>
    )
}