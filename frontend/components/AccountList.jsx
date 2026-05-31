import { useState, useEffect } from "react";
import api from "../services/api";

function AccountList() {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        fetchAccounts();
    }, []);

    const fetchAccounts = async () => {
        try {
            const res = await api.get("/accounts/");
            setAccounts(res.data);
        } catch (error) {
            console.error("Error fetching accounts:", error);
        }
    };

    return (
        <div>
            {accounts.map((acc) => (
                <div key={acc.id}>
                    <h3>{acc.name}</h3>
                    <p>{acc.account_number}</p>
                    <p>{acc.balance}</p>
                  
                </div>
            ))}
        </div>
    );
}

export default AccountList;