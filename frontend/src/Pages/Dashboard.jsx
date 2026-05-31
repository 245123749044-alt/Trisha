import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/accounts/")
      .then((response) => {
        setAccounts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Bank Accounts</h1>

      {accounts.map((account) => (
        <div key={account.id}>
          <p>Name: {account.name}</p>
          <p>Account Number: {account.account_number}</p>
          <p>Balance: {account.balance}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Dashboard;