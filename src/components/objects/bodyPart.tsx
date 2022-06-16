import {Position, Snake} from '../../../types'

export default function bodyPart(context : CanvasRenderingContext2D|undefined, snake:Snake ) {

    if(context){
        Array.isArray(snake.parts)? snake.parts.forEach( (element:Position) => {
            context.fillStyle = snake.colour
            context.strokeStyle = "#146356"
            context.fillRect(element.x,element.y,20,20)
            context.strokeRect(element.x, element.y, 20, 20);
        })  :   null
    }
    
    
}