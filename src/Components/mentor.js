import Mentorcard from "./Mentorcard";
function Mentor()
{
    return(
        <>
        <div id="mentor" className="">
            <div className="text-center align-middle justify-items-center">
                <h1 className="font-poppins font-bold text-[40px]">Where Are Our Mentors From?</h1>
            </div>
        <div className=" flex   gap-x-32 gap-y-10 my-[30px] mx-[75px]">
            <Mentorcard
            link="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Deakin_University_Logo_2017.svg/1200px-Deakin_University_Logo_2017.svg.png"
            collage="Deakin University"
            location="Australia"/>
            <Mentorcard
            link="https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/300px-Vellore_Institute_of_Technology_seal_2017.svg.png"
            collage="VIT Vellore"
            location="India"/>
             <Mentorcard
            link="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
            collage="Google"
            location="Global"/>
             <Mentorcard
            link="https://ik.imagekit.io/onsnhxjshmp/images_1_44646afc5e.jpg"
            collage="University of Greenwich"
            location="United Kingdom"/>
        </div>
        </div>
        </>
    )
}
export default Mentor;