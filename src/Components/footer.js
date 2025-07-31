function Footer(){
    return(
        <>
        <footer className="h-[380px] w-screen ">
        <div className="flex flex-wrap h-[350px] ">
        <div className="w-[350px] mx-[10px]">
        <div className="flex">
            <img src="https://i.ibb.co/v6ZPB2tP/Whats-App-Image-2025-07-26-at-19-45-06-f477c2c6.jpg"
            className="mix-blend-multiply h-[80px] w-[80px]"/>
            <span className="text-2xl text-center font-bold font-poppins text-[30px] my-[30px]">
              Fulcrum
            </span>
         </div>
        <div className="align-middle justify-center">
                <p className=" text-sm text-gray-600  font-semibold py-[10px]" >Bulding a Community Via AI To Expand The Technological Advancment</p>
         </div>
         <div className="my-[20px]">
            <p className="text-lg text-gray-600 font-bold font-poppins px-[10px] py-[10px]">Customer Support</p>
            <i className="fas fa-phone px-[10px] py-[10px] text-gray-600 text-lg"></i><label className=" font-bold text-gray-600">+61 414135784</label>
            <br/>
            <i className="fas fa-envelope px-[10px] py-[10px] text-gray-600 text-lg"></i> <label className=" font-bold text-gray-600">info@fcum.org </label>
         </div>
        </div>  
        <div className=" flex w-[1000px]  mx-[10px]  px-[10px] py-[10px]">
        <div className="my-[60px] w-[350px] px-[5px] ">
        <p className="px-[20px] font-poppins font-bold text-lg text-gray-600">What We Can Offer</p>
        <ul className="list-disc px-[30px] py-[5px] font-poppins font-semibold text-sm text-gray-600">
        <li className="py-[3px]">Resource For Learning</li>
        <li className="py-[3px]">Guideness Towards Change</li>
        <li className="py-[3px]">Creativity</li>
        <li className="py-[3px]">Roadmap of Success</li>
        <li className="py-[3px]">Priority For Under Resourced Region </li>
        </ul>
        </div>
         <div className="my-[60px] w-[350px] ">
    <p className="px-[20px] font-poppins font-bold text-lg text-gray-600">Learning Tracks</p>
<ul className="list-disc px-[30px] py-[5px] font-poppins font-semibold text-sm text-gray-600">
  <li className="py-[3px]">Web Development</li>
  <li className="py-[3px]">AI & ML</li>
  <li className="py-[3px]">Data Science</li>
  <li className="py-[3px]">Career Planning</li>
   <li className="py-[3px]">Cyber Security</li>
    <li className="py-[3px]">Quantum Learning</li>
</ul>

         </div>
         <div className="my-[60px] w-[350px] ">
            <p className="px-[20px]  font-bold font-poppins text-md text-gray-600">Join Us On Discord And Linkdein</p>
            <div className="flex py-[10px] px-[20px] gap-[50px]">
            <img
            src="https://i.ibb.co/b5wwPczg/qrcode-233186108-b768bd67b4e3f87b936c75b335409a6f.png"
            className="h-[100px]
            w-[100px]
            "
            />
            <img
            src="https://i.ibb.co/TBWmvFYk/Linkdein-Fulcrum.png"
            className="h-[100px]
            w-[100px]
            "
            />
            </div>
              <div className="flex">
            <div className=" flex mx-[20px] text-center">
            <img
            src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/c4/logo-discord-pvnsa7dqv9htxx3y5r9c.png/logo-discord-1k9u0lw84c8qwpzke7ros.png?_a=DATAg1AAZAA0"
            className="h-[35px]
            w-[35px]
            mix-blend-multiply
            "
            />
            <label className=" font-bold text-lg text-gray-600 my-[5px]">Discord</label>
            </div>
            <div className="flex mx-[40px] text-center">
            <img
            src="https://blakeoliver.com.au/wp-content/uploads/2023/06/vecteezy_linkedin-logo-png-linkedin-icon-transparent-png_18930585_835.png"
            className="h-[35px]
            w-[35px]
            "
            />
            <label className=" font-bold text-lg text-gray-600 my-[5px]">Linkdein</label>
            </div>
            </div>
         </div>
        </div>
        </div>
        <div className="flex flex-wrap h-[50px]  px-[30px] py-[10px] justify-center ">
        <p className="text-center text-sm text-gray-600 font-poppins font-semibold">&copy; 2025 Fulcrum . All Rights Reserved</p>
        </div>
        </footer>
        </>
    )
}
export default Footer;