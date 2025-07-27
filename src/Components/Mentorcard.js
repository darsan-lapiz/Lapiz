function Mentorcard(props){
    return( 
        <>
        <div className="rounded-md justify-items-center border-gray-500  border-[2.5px]  w-[600px] h-[250px] justify-center text-center align-middle items-center py-[15px] px-[10px]">
            <img
            src={props.link}
            className="rounded-full h-[100px] w-[100px]"
            />
            <p className="font-inter font-bold text-[30px] py-[3px]" > {props.collage} </p>
            <p className="font-inter font-semibold text-gray-500  text-[20px] py-[3px]" >{props.location}</p>
        </div>
        </>
    )
};
export default Mentorcard; 