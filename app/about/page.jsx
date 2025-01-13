export default function AboutUs() {
    return (
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
          <p className="text-lg text-center mb-10">
            Welcome to <strong>The flix</strong> your personalized gateway to the world of movies and TV series!
          </p>
  
          <section className="bg-white shadow-md rounded-lg p-6 mb-8 cursor-pointer">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Effortless Searching:</strong> Instantly search for movies and TV series with our intuitive interface.
              </li>
              <li>
              <strong>Personalized Recommendations:</strong> Receive curated suggestions based on your viewing preferences and favorite genres.
              </li>
              <li>
                <strong>Real-Time Updates:</strong> Stay updated with the latest releases, trending titles, and hidden gems.
              </li>
            </ul>
          </section>
  
          <section className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p>
              We aim to create a tool-based platform that empowers movie and TV enthusiasts to discover, analyze, and enjoy stories that resonate with them. 
              Our focus is on delivering a user-friendly experience, optimized for performance and responsiveness, so you can enjoy your journey without interruptions.
            </p>
          </section>
        </div>
      </div>
    );
  }
  