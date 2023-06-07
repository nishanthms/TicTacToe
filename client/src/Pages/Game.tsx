import BackGround from "../Component/BackGround";
import Board from "../Component/Board";
function Game() {
    return <BackGround>
        <div className="flex flex-col items-center min-h-screen ">
            <h2 className="text-2xl font-bold mb-4 text-black">Player vs Computer</h2>
            <h2 className="text-2xl font-bold mb-4 text-black">Score: 0  -   0</h2>
            <Board />
            <form >
                <button className="mr-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
                    Rematch
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded">
                    Exit
                </button>
            </form>
        </div>
    </BackGround>
}

export default Game;