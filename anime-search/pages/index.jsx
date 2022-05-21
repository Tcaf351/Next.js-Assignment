// import type { NextPage } from 'next'


// const Home: NextPage = () => {
  const Home = () => {
  return (
      <div className="min-h-screen bg-gray-100 px-20 flex">

        {/* text on left of screen start */}
        <div className="flex flex-col items-start justify-center h-screen">
          <div className="flex flex-row items-center justify-center">
            <h1 className="text-5xl font-medium">Welcome to</h1> <span className="text-5xl font-medium px-3 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">Anime-Search</span>
          </div>
          <div>
            <h1 className="text-2xl py-1">Your source for searching Anime!</h1>
          </div>
        </div>
        {/* text on left of screen end */}
        

        {/* image on right of screen start */}
        <div className="flex items-center justify-end w-1/2">
          <div className="bg-black h-60 w-80">
          </div>
        </div>
        {/* image on right of screen end */}

      </div>
  )
}

export default Home