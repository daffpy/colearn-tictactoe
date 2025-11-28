"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function GameStateAlert({isWin, setGrid, setResult}){
    const router = useRouter();
    const [closeAlertWindow, setAlertWindow] = useState(false)
    return(
        <>
        {isWin != "playing" && closeAlertWindow == false ?
            <div className="absolute w-full max-w-200 px-8 left-1/2 -translate-x-1/2">
                <div className="border outline bg-white/80 mb-10 pb-10 backdrop-blur-xs rounded-xl ">
                <div className="text-3xl text-blue-500 lg:text-4xl mt-10 text-center uppercase font-semibold">
                    - YOU {isWin} -
                </div>
                <div className="py-4 px-6 lg:px-8 lg:py-4">
                    <br/>
                    <div className="text-base">
                        <p>
                            it may look pretty simple but i always strive to be the best and try to standout from the rest
                        </p>
                        <br/>
                        <p>
                            hope you find this app interesting and enganging, thank you.
                        </p>
                        <br/>
                        <div className="flex flex-col lg:flex-row gap-5 text-blue-500">
                            &gt; now, play again?
                            <div className=" flex gap-5 mt-2 lg:mt-0 text-yellow-600 justify-center lg:justify-normal">
                                <div className=" hover:text-blue-500 hover:scale-[1.1] duration-200"
                                onClick={()=>{
                                    setGrid(0);
                                    setResult("playing")
                                }
                                }
                                >
                                    [ yes ]
                                </div>
                                <div className=" hover:text-blue-600 hover:scale-[1.1] duration-200"
                                onClick={() => {
                                    setAlertWindow(true)
                                }}
                                >
                                    [ no <span className="italic">(view only)</span> ]
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
            : null
        }
        </>
    )
}