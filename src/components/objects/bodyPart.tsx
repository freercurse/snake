import {Fruit, Position, Snake} from '../../../types'

export default function BodyPart(context : CanvasRenderingContext2D|undefined, snake:Snake, fruit : Fruit ) {

    if(context){
        snake.parts.forEach( (element:Position,index) => {
            context.fillStyle = index === snake.parts.length -1 ? 'yellow'   :  snake.colour
            context.strokeStyle = "#146356"
            context.fillRect(element.x,element.y,20,20)
            context.strokeRect(element.x, element.y, 20, 20);
        })

        context.fillStyle = fruit.colour
        context.strokeStyle = "#146356"
        context.fillRect(fruit.part.x,fruit.part.y,20,20)
        context.strokeRect(fruit.part.x,fruit.part.y,20,20)
    }
    
    
}