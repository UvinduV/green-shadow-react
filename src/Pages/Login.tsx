import {useNavigate} from "react-router";


export function Login() {
    const navigate = useNavigate();
    function goDashboard(){
        navigate('/dashboard');
    }
    return (
        <>
            <h1>Login</h1>

            <button onClick={goDashboard}>Go to Dashboard</button>
        </>
    )
}