import { createRef, useEffect, useRef, useState } from "react"

export default function game() {
    const [gameState, setGameState] = useState<number[][]>()
    const [speed, setSpeed] = useState(5)

    useEffect(() => {
        const boardState = 
        [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,1,0,2,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ]
        setGameState(boardState)
    }, [])

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasCtx = canvasRef.current?.getContext('2d')

    return (
        <canvas
         width={450}
         height={650}        
         ref={canvasRef}
        />
    )
}