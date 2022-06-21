import React, { useEffect, useRef, useState } from "react"
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

export default function Game() {    
    const [snake, setSnake] = useState<Snake>(InitialSnake)
    const [update, setUpdate] = useState(false)    
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D |undefined| null>(canvasRef.current?.getContext('2d'))

    useEffect(() => {
        
        context?.clearRect(0,0,context.canvas.width,context.canvas.height)
        bodyPart(context? context:undefined, snake)
        setContext(canvasRef.current && canvasRef.current.getContext("2d"));        
        
       
    }, [context,snake])
    
    useEffect(() => {
        
        window.addEventListener('keypress', e => handleInput(e), {once:true})             
        return () => window.removeEventListener('keypress' , e => handleInput(e))
          
    },[update])

    const handleInput = (event:KeyboardEvent) => {     
        snake.parts[0].x === 130 ? addTail():null
        setSnake(move(snake, event.key))
        setUpdate(!update)
       
    }

    const addTail = () => {
        let newParts:any = snake.parts
        newParts.push({...snake.parts[snake.parts.length-1]})

        const newSnake = {parts:newParts , colour:'pink'}        
        setSnake(newSnake)
    } 
 
    
    return (
        <canvas            
            width={450}
            height={500}        
            ref={canvasRef}
            className="game_screen"
        />
    )
}

