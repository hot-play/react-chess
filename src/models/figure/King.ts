import {Colors} from "../Colors";
import {Figure, FigureNames} from "./Figure";
import {Cell} from "../Cell";
import blackLogo from "../../figure/BlackKing.png";
import whiteLogo from "../../figure/WhiteKing.png";

export class King extends Figure {

    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false;
        }
        return true;
    }
}