
import { useState } from "react";

function Authenticate({ token }) {
    const [authenticated, setAuthenticated] = useState(false);

    const handleAuthenticate = async () => {
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}` 
                }
            });

            if (response.ok) {
                setAuthenticated(true);
            } else {
                console.error("Authentication failed:", response.statusText);
            }
        } catch (error) {
            console.error("Error occurred during authentication:", error);
        }
    };

    return (
        <div>
            <h2>Authentication Status: {authenticated ? "Authenticated" : "Not Authenticated"}</h2>
            <button onClick={handleAuthenticate}>Authenticate Token</button>
        </div>
    );
}

export default Authenticate;