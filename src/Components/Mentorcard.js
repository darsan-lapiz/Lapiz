function Mentorcard(props) {
  return (
    <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 w-[320px] h-[380px] flex flex-col items-center justify-center p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-700"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Profile Image with enhanced styling */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
          <img
            src={props.link || "https://via.placeholder.com/120"}
            alt="Mentor"
            className="relative rounded-full h-[120px] w-[120px] object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300"
          />
          {/* Online indicator */}
          <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 border-3 border-white rounded-full shadow-lg"></div>
        </div>

        {/* College/Name */}
        <h3 className="font-bold text-2xl text-gray-800 mb-2 text-center leading-tight group-hover:text-blue-600 transition-colors duration-300">
          {props.collage || "College Name"}
        </h3>

        {/* Location */}
        <p className="font-medium text-gray-500 text-lg mb-4 flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          {props.location || "Location"}
        </p>
      </div>
    </div>
  );
}
export default Mentorcard;
