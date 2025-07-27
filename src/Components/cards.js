function Card(props)
{
    return(
        <>
        <div class="flex items-center justify-center">
  <div class="bg-gray-200 rounded-2xl shadow-lg p-6 w-80 h-[340px] text-center mx-[30px]">
    <img
      src={props.link}
      class="w-28 h-28 rounded-full mx-auto mb-4 border-4"
    />

   
    <p class="text-black text-[25px] mb-4 font-inter font-bold">{props.Name}</p>

    
    <p class=" font-poppins font-[30px]text-gray-600 text-sm">
      {props.Details}
    </p>
  </div>
</div>
        </>
    )
}
export default Card;