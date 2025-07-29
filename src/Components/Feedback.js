function Feedback(){
    return(
        <>
        <div>
            <p className="align-center text-center font-bold font-inter text-[50px]">Help Us Improve.</p>
            <p className="align-center text-center font-semibold font-inter text-[30px]">Provide Us Your Thought And Feedback</p>
        <div className="justify-items-center"> 
        <form>
        <input
        type="text"
        placeholder="Tell us how you feel"
        className="h-[180px]
        w-[900px]
        bg-gray-400
        text-white
        " 
        >
        </input>
        </form>
        </div>
        </div>
        </>
    )

}
export default Feedback;