import { redirect, Link } from "react-router-dom"
//redirect("/login")

export function HomePage(){
    return (
        <h1>HomePage where you can link <Link to={"/login"}>LOGIN</Link></h1>

    )
}