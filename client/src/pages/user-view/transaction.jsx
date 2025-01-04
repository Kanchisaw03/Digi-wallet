import React from "react"
import AdminHeader from "@/components/admin-view/header.jsx";

function UserTransaction() {
    const transactions = [
        {
          id: "TXN001",
          date: "2025-01-01",
          description: "Transfer to John Doe",
          amount: "-₹5,000",
          status: "Completed",
        },
        {
          id: "TXN002",
          date: "2025-01-02",
          description: "Received from Jane Smith",
          amount: "+₹10,000",
          status: "Completed",
        },
        {
          id: "TXN003",
          date: "2025-01-03",
          description: "Payment to Netflix",
          amount: "-₹999",
          status: "Pending",
        },
      ];
    
      return (
        <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <AdminHeader />
    
          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
            <h1 className="text-3xl font-bold text-gray-800">Transaction History</h1>
            <p className="text-gray-600 mt-2">
              View your recent transactions and manage your account effortlessly.
            </p>
    
            {/* Filters Section */}
            <div className="mt-8 flex flex-wrap space-x-4">
              <input
                type="text"
                placeholder="Search by ID or Description"
                className="flex-grow px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <select
                className="px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Statuses</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">
                Apply Filters
              </button>
            </div>
    
            {/* Transaction Table */}
            <div className="mt-10 bg-white shadow rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Transaction ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {transactions.map((txn) => (
                    <tr key={txn.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-800">{txn.id}</td>
                      <td className="px-6 py-4 text-gray-600">{txn.date}</td>
                      <td className="px-6 py-4 text-gray-600">{txn.description}</td>
                      <td
                        className={`px-6 py-4 font-medium ${
                          txn.amount.startsWith("-")
                            ? "text-red-600"
                            : "text-green-600"
                        }`}
                      >
                        {txn.amount}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 text-sm rounded-full ${
                            txn.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {txn.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
    
          {/* Footer */}
          <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-6 py-6 sm:px-12">
              <p className="text-center">&copy; 2025 DigiWallet. All rights reserved.</p>
            </div>
          </footer>
        </div>
     );
}


export default UserTransaction;
