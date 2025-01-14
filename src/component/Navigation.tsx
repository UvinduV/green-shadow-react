import {Link} from "react-router";

export function Navigation() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <Link to="/">Dashboard</Link>
                        <Link to="/field">Field</Link>
                        <Link to="/crop">Crop</Link>
                        <Link to="/staff">Staff</Link>
                        <Link to="/vehicle">Vehicle</Link>
                        <Link to="/equipment">Equipment</Link>
                        <Link to="/logs">Logs</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}