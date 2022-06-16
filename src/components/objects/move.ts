import { Snake } from "../../../types";

export default function move(snake:Snake,movement:string ) {

    const Sparts = snake.parts

    switch(movement) {
        case 'w':
            Sparts[Sparts.length - 1].y-=5
            break;
        case 'a':
            Sparts[Sparts.length - 1].x-=5
            break;
        case 's':
            Sparts[Sparts.length - 1].y+=5
            break;
        case 'd':
            Sparts[Sparts.length - 1].x+=5
            break;
    }
    
    for(let i = Sparts.length - 2; i > -1; i -=1) {
        console.log(Sparts[i])
        Sparts[i].x = snake.parts[i+1].x
        Sparts[i].y = snake.parts[i+1].y
        console.log(snake.parts)
    }
    
    const ret : Snake= {
        parts: Sparts,
        colour: snake.colour 
    }   
    console.log(ret)
    return ret
}

