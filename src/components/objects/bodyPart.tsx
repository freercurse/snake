import {Position, Snake} from '../../../types'

export default function BodyPart(context : CanvasRenderingContext2D|undefined, snake:Snake ) {

    if(context){
        snake.parts.forEach( (element:Position) => {
            context.fillStyle = element.x === 50 ? 'yellow':snake.colour
            context.strokeStyle = "#146356"
            context.fillRect(element.x,element.y,20,20)
            context.strokeRect(element.x, element.y, 20, 20);
        })
    }
    
    
}