function About()
{
    return(
        <>
        <div id="about" className="flex h-screen">
            <div className="flex">
                <img src="https://i.ibb.co/27YcXVKW/fulcurm.png" className=' ml-[30px] my-[30px] mix-blend-normal h-[100px] w-[100px]'/>
                <h1 className='h-[40px] w-[40px] top-[300px] my-[55px] text-Black font-inter font-bold text-[40px]'>Fulcurm</h1>
            </div>
            <div className=" my-[250px] ml-[350px] align-middle items-center justify-center text-center font-inter max-w-[600px] ">
                <p className="text-[30px] font-bold">We Support Individual From Under Resourced Region</p>
                <p className="text-[30px] font-bold">To Learn AI</p>
                <p className="my-[20px] text-gray-500">---Non-Profit Initiative---</p>
            </div>
        </div>
        </>
    )
}
export default About;