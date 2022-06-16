import React, { KeyboardEventHandler } from "react"
import bodyPart from "./objects/bodyPart"
import {Snake} from '../../types'
import move from "./objects/move"

const InitialSnake : Snake = {
        parts: [
            { x: 50, y: 50 },
            { x: 70, y: 50 },
            { x: 90, y: 50 },
            { x: 110, y: 50 },
            { x: 130, y: 50 },
          ],
        colour: 'blue'
    }

export default function game() {
    const [context, setContext] = React.useState<CanvasRenderingContext2D |undefined| null>(null!)
    const [snake, setSnake] = React.useState<Snake>(InitialSnake)
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);    


    React.useEffect(() => {
        context?.clearRect(0,0,context.canvas.width,context.canvas.height)
        setContext(canvasRef.current?.getContext('2d'))
        bodyPart(context? context:undefined, snake)
       
    }, [context, snake])

    React.useEffect(() => {
        window.addEventListener('keypress', (event) => {
            
            setSnake(move(snake,event.key))
            
        })
    },[])

    
    return (
        <canvas            
            width={450}
            height={500}        
            ref={canvasRef}
            className="game_screen"
        />
    )
}