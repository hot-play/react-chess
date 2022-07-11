import { Colors } from "../Colors";
import logo from "../../figure/BlackKing.png";
import { Cell } from "../Cell";

export enum FigureNames{
    FIGURE = "Фигуры",
    KING = "Король",
    QUEEN ="Ферзь",
    ROOK = "Ладья",
    BISHOP = "Слон",
    KNIGHT = "Конь",
    PAWN = "Пешка",
}

export class Figure{
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(color: Colors, cell: Cell){
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }

    canMove(target: Cell) : boolean {
        if(target.figure?.color === this.color)
        return false;
        if(target.figure?.name === FigureNames.KING)
        return false;
        return true;
    }
    moveFigure(target: Cell) {
        
    }
}