import React from "react";
import { Board } from "../models/Board";

interface BoardProps {
    board:Board;
    setBoard: (board: Board)=> void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) =>{
    return(
        <div
        className="board"
        >
        </div>
    )
}
export default BoardComponent;