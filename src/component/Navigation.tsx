import {Link} from "react-router";
import "./Navigation.css";


export function Navigation() {
    return (
        <>
            <header className="header-main">
                <nav className="px-4 py-3">
                    <ul className="flex text-white space-x-4">
                        <Link to="/" className="custom-link border-2">Dashboard</Link>
                        <Link to="/field" className="custom-link">Field</Link>
                        <Link to="/crop" className="custom-link">Crop</Link>
                        <Link to="/staff" className="custom-link">Staff</Link>
                        <Link to="/vehicle" className="custom-link">Vehicle</Link>
                        <Link to="/equipment" className="custom-link">Equipment</Link>
                        <Link to="/logs" className="custom-link">Logs</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}