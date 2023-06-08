import { ChangeEvent, useState } from "react";
import BackGround from "../Component/BackGround";
import { SetAuthToken } from "../Utility/LocalStorageUtility";
import { useNavigate } from "react-router-dom";

function Home() {
    const [name, setName] = useState<string>("");
    const navigate = useNavigate();
    const handleClick = () => {
        console.log('Button clicked!' + name);
        SetAuthToken(name);
        navigate("Game")
    };
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    return (
        <main>
            <BackGround className="items-center min-h-screen p-28">
                <div className="bg-white p-8 rounded shadow ">
                    <h2 className="text-2xl font-bold mb-4">Play As Guest</h2>
                    <input
                        onChange={handleChange}
                        value={name}
                        type="text"
                        placeholder="Enter Name"
                        className="w-full bg-gray-100 border border-gray-300 rounded py-2 px-4 mb-4"
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
                        onClick={handleClick}>
                        Let's Play
                    </button>
                </div>
            </BackGround>
        </main>
    );
}

export default Home;