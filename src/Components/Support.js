import Card from "./cards"
function Support(){
    return(
        <>
        <div id="support" className="h-screen m-[10px] py-[5px]">
            <div className=" align-center text-center justify-center-screen max-h-[500px]">
                <h1 className="font-poppins font-semibold text-[30px] my-[30px]">How We Support?</h1>
                <div className="flex align-center text-center justify-center items-center my-[40px]">
                <Card 
                link="https://i.ibb.co/ks84FG9C/Global-Mentorship.png"
                Name="Global Scale Menotrship"
                Details="Connecting Learners with experienced AI professionals worldwide"
                className="mx-[2px]"/>
               <Card 
                link="https://i.ibb.co/r2FsFYtD/Free-Learning-Resource.png"
                Name="Free Learning Resources"
                Details="Accessible educational materials and courses for all skill levels"/>
                <Card 
                link="https://i.ibb.co/G4QXSGNm/Bridging-Communities.png"
                Name="Bridging Communitites"
                Details="Connecting rural areas to cutting-edge AI develpoments"/>
                </div>
                <div>
                    <p className="font-poppins font-semibold text-[30px]">Would Like to Join Us?</p>
                    <p className="font-poppins font-semibold text-[20px] text-gray-800">Tell us how you qualify and prove you are from underresourced region.Write us an email with your CV and describing why you want to get mentorship from us</p>
                </div>
                <div id="join" className="my-[20px]">
                <p className="font-poppins font-bold text-[30px]">Apply for Mentorship</p>
                <a href=" " className="font-inter font-semibold text-[15px]">join@fulcurm.org</a>
                </div>
            </div>
        </div>
        </>
    )
}
export default Support;