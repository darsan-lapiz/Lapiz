function Home(){
    return(
        <div className="h-screen">
        <nav className='flex  px-2 py-2 my-4 rounded-3xl flex-wrap '>
      <div className='flex my-[28px]'>
      </div>
      <div className=' flex text-white align-middle items-center w-[600px] h-[62px] gap-[10px] m-4 ml-[480px] top-[53px]   outline-none rounded-[50px]    justify-center'>
         <button className='m-2 w-[80px] h-[40px]  border-black    rounded-[20px] text-1xl font-bolder align-middle text-white gap-[10px]  '>About</button>
         <button className='m-2 w-[80px] h-[40px]  rounded-[20px] text-1xl font-bolder align-middle text-white gap-[10px]  '>Mission</button>
         <button className='m-2 w-[80px] h-[40px]  hover:bg-green-100 bg-transparent rounded-[20px] text-1xl font-bolder align-middle text-white gap-[10px]  '>Support</button>
         <button className='m-2 w-[80px] h-[40px]  hover:bg-green-100 bg-transparent rounded-[20px] text-1xl font-bolder align-middle text-white gap-[10px]  '>Join Us</button>
         <button className='m-2 w-[80px] h-[40px]  hover:bg-green-100 bg-transparent rounded-[20px] text-1xl font-bolder align-middle text-white gap-[10px]  '>Contact</button>
      </div>
    </nav>
    <div className='my-[80px] mx-10 ml-[275px] m-96 text-center w-[761px] h-[230px]'>
      <div className='flex my-[28px]'>
      <img src="https://i.ibb.co/27YcXVKW/fulcurm.png" className=' mix-blend-normal h-[200px] w-[200px] ml-[120px] top-[300px]'/>
      <h1 className='h-[40px] w-[40px] top-[300px] text-white font-inter font-bold text-[150px]'>Fulcurm</h1>
      </div>
    </div>
    </div>
    )
}
export default Home;