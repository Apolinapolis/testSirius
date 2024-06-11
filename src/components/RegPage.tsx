import { Link } from "react-router-dom";

export function RegPage() {
    return (
        <div>
            <h1>REGISTER Page</h1>
            <Link to={"/login"}>Login</Link>
        </div>
    )
}