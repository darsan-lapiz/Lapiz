import Navbar from "./navbar";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 scroll-smooth">
      <Navbar />

      <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
              <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-1000"></div>
              <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
              <div className="flex-1 order-1 lg:order-2 max-w-2xl text-center">
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent">
                    Fulcrum
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                  Empowering minds through innovative mentorship and
                  collaborative learning experiences
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                  <button className="group bg-black text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                    <span>Get Started</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>

                  <button className="border-2 border-black text-black px-10 py-5 rounded-full text-lg font-semibold hover:bg-black hover:text-white hover:scale-105 transition-all duration-300">
                    Learn More
                  </button>
                </div>

                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-black to-transparent mx-auto mb-8"></div>
              </div>
            </div>

            <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { number: "10K+", label: "Students Mentored", icon: "👥" },
                { number: "500+", label: "Expert Mentors", icon: "🎓" },
                { number: "95%", label: "Success Rate", icon: "📈" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group text-center p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-lg font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    Lightning Fast
                  </h3>
                  <p className="text-gray-600">
                    Connect with mentors instantly and start your learning
                    journey without delays.
                  </p>
                </div>

                <div className="text-left p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    Proven Results
                  </h3>
                  <p className="text-gray-600">
                    Our mentorship programs have helped thousands achieve their
                    goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
