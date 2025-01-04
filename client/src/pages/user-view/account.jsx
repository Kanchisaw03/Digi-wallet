import AdminHeader from "@/components/admin-view/header.jsx";

function UserAccount() {
    return ( 
        
    
    <div >
     
        
      <AdminHeader />
      <div/>
    <div/>

        <hr className="my-6 border-gray-300" />

        {/* Profile Details */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Profile Details</h2>
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                defaultValue="John Doe"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                defaultValue="johndoe@example.com"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                defaultValue="+1234567890"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>

        <hr className="my-6 border-gray-300" />

        {/* Account Settings */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Change Password</span>
              <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                Update
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span>Two-Factor Authentication</span>
              <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                Enable
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span>Delete Account</span>
              <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
   
  );
}

   

export default UserAccount;
