import { useState } from "react";
import { Snake } from "../../../types";

export default function Move(snake:Snake,movement:string ) {    
    
   const sParts = copy(snake?.parts)

   
    
    switch(movement) {
        
        case 'w':
            sParts[sParts.length - 1].y-=20
            break;
        case 'a':
            sParts[sParts.length - 1].x-=20
            break;
        case 's':
            sParts[sParts.length - 1].y+=20
            break;
        case 'd':
            sParts[sParts.length - 1].x+=20
            break;
       
            
    }

    
    
    for(let i = sParts.length - 2; i > -1; i--) {
        
        sParts[i].x = snake.parts[i+1].x
        sParts[i].y = snake.parts[i+1].y
        
    }      
    
    const ret = {
        parts:sParts,
        colour:snake.colour
    }
    
    return ret
    
}

function copy(array:Array<any>) {
    return JSON.parse(JSON.stringify(array));
  }