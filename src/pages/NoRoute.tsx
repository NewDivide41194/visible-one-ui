import { Link } from "react-router-dom";

const NoRoute = () => {
    return (
        <div className="text-center h-100 p-5">
            <h1>404 - Page Not Found</h1>
            <Link to={"/"}>GO BACK HOME</Link>
        </div>
    );
}
export default NoRoute;