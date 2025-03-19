import { JSX } from "react";
import { Footer, HappeningNowCards, Header, Navbar, TrendingCards } from "../components/home";

const HomePage = (): JSX.Element => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="container my-4">
                <TrendingCards />
                <HappeningNowCards />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;