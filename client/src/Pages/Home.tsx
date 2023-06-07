import BackGround from "../Component/BackGround";

function Home() {
    return (
        <main>
            <BackGround className="items-center min-h-screen p-20">
                <div className="bg-white p-8 rounded shadow ">
                    <h2 className="text-2xl font-bold mb-4">Play As Guest</h2>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        className="w-full bg-gray-100 border border-gray-300 rounded py-2 px-4 mb-4"
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
                        Let's Play
                    </button>
                </div>
            </BackGround>
        </main>
    );
}

export default Home;