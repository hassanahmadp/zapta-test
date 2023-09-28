import { Search, UserList } from "./components"

function App() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <div className="max-w-[70rem] w-full mx-auto">
        <div className="min-h-[30vh] flex justify-center items-center">
          <h1 className="font-bold text-gray-300 p-6 text-3xl sm:text-5xl">
            👋 Hello,
            <br />
            This is a test task for Zapta Technologies
          </h1>
        </div>
        <Search />
        <UserList />
      </div>
    </div>
  )
}

export default App
