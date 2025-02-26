import {useState} from "react";
import {useNavigate} from "react-router";

export function Register(){
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleRegister(){
        navigate("/");

    }
    function getLogin(){
        navigate("/");

    }

    return (
        <>

            <section>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                        Green Shadow
                    </a>
                    <div className="w-full bg-white shadow md:mt-0 sm:max-w-md xl:p-0 rounded-bl-3xl rounded-tr-3xl">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Sign in
                            </h1>
                            <form className="space-y-2 " action="#">
                                <div>
                                    <label htmlFor="name"
                                           className="block mb-2 text-sm font-medium text-gray-900 ">
                                        Your Name
                                    </label>
                                    <input type="text" name="name" id="name"
                                           value={name}
                                           onChange={(e) => setName(e.target.value)}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                           placeholder="" required

                                    />
                                </div>
                                <div className="flex gap-4 mb-4">
                                    <label>Job Role :</label>
                                    <select
                                        name="role"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        id=""
                                        className="border p-1 rounded"
                                    >
                                        <option value="">Select Role</option>
                                        <option value="MANAGER">Manager</option>
                                        <option value="ADMINISTRATIVE">Admin</option>
                                        <option value="SCIENTIST">Scientist</option>
                                        <option value="DRIVER">Driver</option>
                                        <option value="OTHER">Other</option>

                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="email"
                                           className="block mb-2 text-sm font-medium text-gray-900 ">
                                        Your email
                                    </label>
                                    <input type="email" name="email" id="email"
                                           value={email}
                                           onChange={(e) => setEmail(e.target.value)}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                           placeholder="" required

                                    />
                                </div>
                                <div>
                                    <label htmlFor="password"
                                           className="block mb-2 text-sm font-medium text-gray-900 ">
                                        Password
                                    </label>
                                    <input type="password" name="password" id="password" placeholder="••••••••"
                                           value={password}
                                           onChange={(e) => setPassword(e.target.value)}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                           required
                                    />
                                </div>

                                <button onClick={handleRegister} type="submit"
                                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center rounded-bl-3xl rounded-tr-3xl">
                                    Sign Up
                                </button>
                                <p className="text-sm font-light text-gray-500 ">
                                    Already have an account ?
                                    <a onClick={getLogin}
                                       className="font-medium text-primary-600 hover:underline  hover:font-bold hover:text-green-700 ">
                                        Sign In here
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}