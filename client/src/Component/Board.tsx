import Cell from "./Cell";

function Board() {
    return (
        <div className="grid grid-cols-3 p-12">
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
        </div>
    )
}

export default Board;