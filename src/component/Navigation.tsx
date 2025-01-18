import {Link} from "react-router";
import "./Navigation.css";


export function Navigation() {
    return (
        <>
            <header className="header-main">
                <nav className="flex items-center justify-between px-6 py-4">
                    <h2 className="text-white text-3xl font-bold">Green Shadow</h2>
                    <ul className="flex text-white gap-6">
                        <Link to="/dashboard" className="custom-link">Dashboard</Link>
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