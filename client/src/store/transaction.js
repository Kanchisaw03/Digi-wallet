import axios from "axios";

// Fetches user data and transactions
export const fetchUserAndTransactions = async (setUser, fetchTransactions, fetchBalance) => {
  try {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      await fetchTransactions(storedUser.upi_id);
      await fetchBalance(storedUser.upi_id);
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

// Fetch transactions for a specific UPI ID
export const fetchTransactions = async (upi_id, setTransactions) => {
  try {
    const response = await axios.get(
      `http://localhost:5001/api/transactions/${upi_id}`
    );
    setTransactions(response.data);
  } catch (error) {
    console.error("Error fetching transactions:", error);
  }
};

// Fetch balance for a specific UPI ID
export const fetchBalance = async (upi_id, setUser) => {
  try {
    const response = await axios.get(
      `http://localhost:5001/api/user/${upi_id}`
    );
    setUser(response.data);
  } catch (error) {
    console.error("Error fetching balance:", error);
  }
};

// Handle the transaction process
export const handleTransaction = async (
  user,
  receiverUpi,
  amount,
  setMessage,
  fetchTransactions,
  fetchBalance,
  setAmount,
  setReceiverUpi
) => {
  if (!amount || !receiverUpi) {
    setMessage("Please provide amount and receiver UPI ID.");
    return;
  }

  try {
    const response = await axios.post("http://localhost:5001/api/transaction", {
      sender_upi_id: user.upi_id,
      receiver_upi_id: receiverUpi,
      amount: parseFloat(amount),
    });

    setMessage(response.data.message);
    if (response.status === 200) {
      await fetchTransactions(user.upi_id);
      await fetchBalance(user.upi_id);
      setAmount("");
      setReceiverUpi("");
    }
  } catch (error) {
    console.error("Error making transaction:", error);
    setMessage("Transaction failed.");
  }
};

// Format transaction data for the chart
export const formatChartData = (transactions) => {
  return transactions
    .map((tx) => ({
      timestamp: new Date(tx.timestamp).toLocaleDateString(),
      amount: tx.amount,
    }))
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
};
