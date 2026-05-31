import { useState } from "react";
import api from "../services/api";

function AccountForm() {
    const [name, setName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [balance, setBalance] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: name,
            account_number: accountNumber,
            balance: balance,
        };

        try {
            await api.post("/accounts/", data);

            alert("Account Saved Successfully");

            setName("");
            setAccountNumber("");
            setBalance("");
        } catch (error) {
            console.log(error);

            if (error.response) {
                alert(error.response.data.detail || "Error occurred");
            } else {
                alert("Server not Running");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Account Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
            />

            <input
                type="number"
                placeholder="Balance"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
            />

            <button type="submit">Save Account</button>
        </form>
    );
}

export default AccountForm;