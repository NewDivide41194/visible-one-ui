import { JSX } from "react";

import { Header, Navbar } from "../components/home";

const DashboardPage = (): JSX.Element => {
    return (
        <div>
            <Navbar/>
            <Header/>
        </div>  
    )
}

export default DashboardPage;