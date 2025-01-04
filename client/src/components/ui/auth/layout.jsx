import { Link, Outlet, useLocation } from "react-router-dom";

function AuthLayout() {
  const location = useLocation();
  const showButtons = location.pathname === "/";

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side */}
      <div className="hidden lg:flex flex-col items-center justify-center bg-black w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome to DigiWallet
          </h1>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center w-full max-w-md">
          {/* Show buttons only on the root path */}
          {showButtons && (
            <div className="flex justify-center space-x-4 mb-6">
              <Link to="/login">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Register
                </button>
              </Link>
            </div>
          )}

          {/* Render child components (forms for login/register) */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;




