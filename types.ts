export interface Snake {    
    parts: Array<Position>;
    colour: string;    
}

export interface Fruit {    
    part: Position;
    colour: string;    
}

export interface Position extends Object {
    x:number;
    y:number;
}