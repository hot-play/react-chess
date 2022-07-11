import {Colors} from "../Colors";
import {Figure, FigureNames} from "./Figure";
import {Cell} from "../Cell";
import blackLogo from "../../figure/BlackRook.png";
import whiteLogo from "../../figure/WhiteRook.png";

export class Rook extends Figure {

    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.ROOK;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false;
        }
        return true;
    }
}