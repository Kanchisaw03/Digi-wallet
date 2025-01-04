import AdminHeader from "@/components/admin-view/header.jsx";

function UserHome() {
    return ( 
        <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <AdminHeader/>
  
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-black to-purple-900 text-white">
          <div className="max-w-7xl mx-auto py-20 px-6 sm:px-12 lg:py-28">
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              Welcome to <span className="text-purple-400">DigiWallet</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg sm:text-xl">
              Your secure, fast, and smart way to manage your money. 
              Send, receive, and save with confidence!
            </p>
            <div className="mt-8 flex space-x-4">
              <a
                href="/auth/register"
                className="px-8 py-4 bg-yellow-100 text-blue-600 font-medium rounded-full shadow-lg hover:bg-yellow-300"
              >
                Get Started
              </a>
              <a
                href="/learn-more"
                className="px-8 py-4 bg-transparent border border-white text-white font-medium rounded-full hover:bg-white hover:text-blue-600"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-70"></div>
        </div>
  
        {/* Features Section */}
        <div className="py-16 bg-purple-950">
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <h2 className="text-4xl font-extrabold text-gray-300 text-center sm:text-5xl">
              Why Choose DigiWallet?
            </h2>
            <p className="mt-4 text-grey-400 text-center">
              Explore the unique features that make DigiWallet your ultimate digital money companion.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full text-white mb-4">
                  <i className="fas fa-shield-alt text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Top-Notch Security</h3>
                <p className="mt-3 text-gray-600">
                  Your data and money are protected with industry-leading encryption and multi-layer security.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full text-white mb-4">
                  <i className="fas fa-paper-plane text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Instant Transfers</h3>
                <p className="mt-3 text-gray-600">
                  Send and receive money anywhere in the world, instantly and hassle-free.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
                <div className="flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full text-white mb-4">
                  <i className="fas fa-piggy-bank text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Smart Savings</h3>
                <p className="mt-3 text-gray-600">
                  Use our tools to automate your savings and grow your wealth effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Call-to-Action Section */}
        <div className="py-20 bg-gradient-to-r from-purple-600 to-black text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold sm:text-5xl">Ready to Simplify Your Finances?</h2>
            <p className="mt-4 text-lg">
              Join millions of users worldwide who trust DigiWallet for their daily financial needs.
            </p>
            <div className="mt-8">
              <a
                href="/auth/register"
                className="px-8 py-4 bg-yellow-400 text-blue-600 font-medium rounded-full shadow-lg hover:bg-yellow-300"
              >
                Sign Up Now
              </a>
            </div>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-6 py-10 sm:px-12">
            <div className="flex justify-between items-center">
              <p>&copy; 2025 DigiWallet. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:underline">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
     );
}


export default UserHome;
