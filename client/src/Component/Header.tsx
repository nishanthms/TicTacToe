function Header() {
    return (
        <div className="flex flex-col bg-gray-700 p-8">
            <nav className="flex items-center justify-between p-4 bg-gray-900 text-white rounded-lg shadow-lg">
                <div className="flex items-center">
                    <img width="100" height="100" src="HeaderIcon.jpeg" alt="TIC TAC TOE" />
                    <span className="text-lg font-bold  p-4">TIC TAC TOE</span>
                </div>
                {/* <div>
                    <button className="mr-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
                        Login
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded">
                        Sign Up
                    </button>
                </div> */}
            </nav>
        </div>
    )
}

export default Header