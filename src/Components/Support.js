import Card from "./cards"
function Support(){
    return(
        <>
        <div className="h-screen m-[10px] py-[10px]">
            <div className=" align-center text-center justify-center-screen max-h-[500px]">
                <h1 className="font-poppins font-semibold text-[30px] my-[30px]">How We Support?</h1>
                <div className="flex align-center text-center justify-center items-center my-[40px]">
                <Card 
                link="https://i.ibb.co/ks84FG9C/Global-Mentorship.png"
                Name="Global Menotrship"
                Details="Connction"
                className="mx-[2px]"/>
               <Card 
                link="https://i.ibb.co/r2FsFYtD/Free-Learning-Resource.png"
                Name="Global Menotrship"
                Details="Connction"/>
                <Card 
                link="https://i.ibb.co/G4QXSGNm/Bridging-Communities.png"
                Name="Global Menotrship"
                Details="Connction"/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Support;