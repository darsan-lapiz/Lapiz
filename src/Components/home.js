import Navbar from "./navbar";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br scroll-smooth font-sans text-gray-800">
      <Navbar />

      <div className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">

          
         {/*<div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
          </div>*/}

          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            <div className="flex-1 order-1 lg:order-2 max-w-2xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent">
                Fulcrum
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
                Empowering minds through innovative mentorship and collaborative learning experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="#learn" className="scroll-smooth"><button className="border-2 border-black text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-md">
                  Learn More
                </button></a>
              </div>
            </div>
          </div>

          
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { number: "10K+", label: "Students Mentored", icon: "👥" },
              { number: "500+", label: "Expert Mentors", icon: "🎓" },
              { number: "95%", label: "Success Rate", icon: "📈" },
            ].map((stat, index) => (
              <div key={index} className="group text-center p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-gray-300 hover:bg-white hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>

          
          <div id="learn" className="mt-24 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Lightning Fast",
                desc: "Connect with mentors instantly and start your learning journey without delays.",
                iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "Proven Results",
                desc: "Our mentorship programs have helped thousands achieve their goals.",
                iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white shadow-md border border-gray-200 hover:shadow-xl transition duration-300">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.iconPath} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

     
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
