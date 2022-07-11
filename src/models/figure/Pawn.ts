import {Colors} from "../Colors";
import {Figure, FigureNames} from "./Figure";
import {Cell} from "../Cell";
import blackLogo from "../../figure/BlackPawn.png";
import whiteLogo from "../../figure/WhitePawn.png";

export class Pawn extends Figure {

    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false;
        }
        return true;
    }
}