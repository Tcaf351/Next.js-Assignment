// import type { NextPage } from 'next'


// const Home: NextPage = () => {
  const Home = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-start justify-center px-10">
        <div className="flex flex-row items-center justify-center">
          <h1 className="text-5xl font-medium">Welcome to</h1> <span className="text-5xl font-medium px-3 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">Anime-Search</span>
        </div>
        <div>
          <h1 className="text-2xl py-1">Your source for searching Anime!</h1>
        </div>
      </div>
    </div>
  )
}

export default Home