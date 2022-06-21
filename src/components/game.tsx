import React, { useEffect, useRef, useState } from "react"
import bodyPart from "./objects/bodyPart"
import {Snake, Fruit} from '../../types'
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

const InitalFruit : Fruit = {
    part : {x: 190, y: 450},
    colour: 'red'
}


export default function Game({GameOver}:{GameOver: any}) {    
    const [snake, setSnake] = useState<Snake>(InitialSnake)
    const [fruit, setFruit] = useState<Fruit>(InitalFruit)
    const [score, setScore] = useState(0) 
    const [time, setTime] = useState(30) 
    const [update, setUpdate] = useState(false)    
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D |undefined| null>(canvasRef.current?.getContext('2d'))

    useEffect(()=> {
        const timer = setInterval(()=>{
            setTime(time-1)
            if(time === 0){
                GameOver(true)
            }
        },1000)

        return ()=> clearInterval(timer)
    },[time])

    useEffect(() => {
        
        context?.clearRect(0,0,context.canvas.width,context.canvas.height)
        bodyPart(context? context:undefined, snake, fruit)
        setContext(canvasRef.current && canvasRef.current.getContext("2d"));        
        
       
    }, [context,snake, fruit])
    
    useEffect(() => {
        
        window.addEventListener('keypress', e => handleInput(e), {once:true})             
        return () => window.removeEventListener('keypress' , e => handleInput(e))
          
    },[update])

    const handleInput = (event:KeyboardEvent) => {     
        handleEvents()
        setSnake(move(snake, event.key))
        setUpdate(!update)
       
    }

    const addTail = () => {
        setScore(score+1)
        let newParts:any = snake.parts
        newParts.push({...snake.parts[snake.parts.length-1]})

        const newSnake = {parts:newParts , colour:'pink'}        
        setSnake(newSnake)
    } 

    function handleEvents() {
        if(snake.parts[snake.parts.length - 1].x === fruit.part.x && snake.parts[snake.parts.length - 1].y === fruit.part.y){

            addTail()
            swapfruit()
        }else{

            for(let i = snake.parts.length - 2; i > -1; i--) {
        
                if(snake.parts[snake.parts.length - 1].x === snake.parts[i].x && snake.parts[snake.parts.length - 1].y === snake.parts[i].y){

                    GameOver()
                }            
            }
        }
        
        if(snake.parts[snake.parts.length - 1].x >= 490 || snake.parts[snake.parts.length - 1].x<= 0){
            
            GameOver()
        }

        if(snake.parts[snake.parts.length - 1].y >= 590 || snake.parts[snake.parts.length - 1].y <= 0){
        
            GameOver()
        }
    }
 
    function swapfruit() {
        let newX = Math.round(Math.random()*45)
        let newY = Math.round(Math.random()*50)

        if(newX % 2 === 0){
            newX +=5
        }

        if(newY % 2 === 0){
            newY +=5
        }

        const newFruit = {
            part: {
                x:  newX*10,
                y:  newY*10 
                },
            colour: 'pink'
        }       

        if(newFruit.part.x >= 480 || newFruit.part.x <= 10 || newFruit.part.y >= 580 || newFruit.part.x <= 0){
            swapfruit()
            return
        }

        setFruit(newFruit)
    }
    
    return (
        <> 
            <h1>{time}</h1> 
            <canvas            
                width={490}
                height={590}        
                ref={canvasRef}
                className="game_screen"
            />
            <h2>{score}</h2>
        </>
        
    )
}



