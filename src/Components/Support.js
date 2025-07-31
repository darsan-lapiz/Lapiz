import Card from "./cards"

function Support() {
  return (
    <section
      id="support"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Subtle background elements */}
      {/*<div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-2000"></div>
      </div>*/}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main heading */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent mb-8">
            How We Support?
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-black to-transparent mx-auto"></div>
        </div>

        {/* Support cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <Card
            link="https://i.ibb.co/ks84FG9C/Global-Mentorship.png"
            Name="Global Scale Mentorship"
            Details="Connecting learners with experienced AI professionals worldwide through personalized guidance"
          />
          <Card
            link="https://i.ibb.co/r2FsFYtD/Free-Learning-Resource.png"
            Name="Free Learning Resources"
            Details="Accessible educational materials and courses for all skill levels, completely free of charge"
          />
          <Card
            link="https://i.ibb.co/G4QXSGNm/Bridging-Communities.png"
            Name="Bridging Communities"
            Details="Connecting rural areas to cutting-edge AI developments and opportunities"
          />
        </div>

        {/* Join Us Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">Would Like to Join Us?</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Tell us how you qualify and prove you are from an under-resourced region. Write us an email with your CV
                and describe why you want to get mentorship from us.
              </p>
            </div>

            {/* Application process steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  step: "01",
                  title: "Prepare Your CV",
                  description: "Include your educational background and any relevant experience",
                },
                {
                  step: "02",
                  title: "Write Your Story",
                  description: "Explain your background and why you need mentorship",
                },
                {
                  step: "03",
                  title: "Send Application",
                  description: "Email us with all required documents and information",
                },
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Contact section */}
            <div className="text-center bg-black/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black mb-4">Apply for Mentorship</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <span className="text-gray-600 font-medium">Send your application to:</span>
                <a
                  href="mailto:join@fulcrum.org"
                  className="inline-flex items-center space-x-2 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300 font-semibold"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>join@fulcrum.org</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-600"></div>
            </div>
            <span className="text-gray-600 font-medium">Empowering Through Education</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-600"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Support
