import { Link } from "@inertiajs/react";
import Login from "./Auth/Login";
import Dashboard from "./Dashboard";

function Welcome({auth}) {
    return (
    <>
    {auth.user ? <Dashboard auth={auth}/> : <Login/>}

    </>
    );
}

export default Welcome;
