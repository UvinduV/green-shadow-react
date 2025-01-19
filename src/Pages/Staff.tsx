export function Staff() {
    return (
        <>
            <h1>Staff</h1>
            <div className="flex justify-end mt-4 mr-56">
                <button>New Staff</button>
            </div>

            {/*Staff Table*/}
            <div
                className="relative overflow-x-auto w-5/6 shadow-md sm:rounded-lg mt-6 ml-28"
            >
                <table className="w-full text-sm text-left rtl:text-right text-black">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Staff Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            First Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Last Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Designation
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Gender
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Joined Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Contact
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-slate-100 cursor-pointer">
                    <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4">Kamal</td>
                        <td className="px-6 py-4">perera</td>
                        <td className="px-6 py-4">Manager</td>
                        <td className="px-6 py-4">Male</td>
                        <td className="px-6 py-4">2024.06.16</td>
                        <td className="px-6 py-4">Gampaha</td>
                        <td className="px-6 py-4">0785645766</td>
                        <td className="px-6 py-4">kamal12@gmail.com</td>
                        <td className="px-6 py-4">
                            <a
                                href="#"
                                className="font-medium text-blue-600 hover:underline"
                            >
                                Edit

                            </a>
                            <a
                                href="#"
                                className="font-medium text-red-600 hover:underline ml-2"
                            >
                                Delete

                            </a>
                        </td>
                    </tr>
                    <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
                        <td className="px-6 py-4">2</td>
                        <td className="px-6 py-4">Kamal</td>
                        <td className="px-6 py-4">perera</td>
                        <td className="px-6 py-4">Manager</td>
                        <td className="px-6 py-4">Male</td>
                        <td className="px-6 py-4">2024.06.16</td>
                        <td className="px-6 py-4">Gampaha</td>
                        <td className="px-6 py-4">0785645766</td>
                        <td className="px-6 py-4">kamal12@gmail.com</td>
                        <td className="px-6 py-4">
                            <a
                                href="#"
                                className="font-medium text-blue-600 hover:underline"
                            >
                                Edit
                            </a>
                            <a
                                href="#"
                                className="font-medium text-red-600 hover:underline ml-2"
                            >
                                Delete
                            </a>
                        </td>
                    </tr>
                    <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
                        <td className="px-6 py-4">3</td>
                        <td className="px-6 py-4">Kamal</td>
                        <td className="px-6 py-4">perera</td>
                        <td className="px-6 py-4">Manager</td>
                        <td className="px-6 py-4">Male</td>
                        <td className="px-6 py-4">2024.06.16</td>
                        <td className="px-6 py-4">Gampaha</td>
                        <td className="px-6 py-4">0785645766</td>
                        <td className="px-6 py-4">kamal12@gmail.com</td>
                        <td className="px-6 py-4">
                            <a
                                href="#"
                                className="font-medium text-blue-600 hover:underline"
                            >
                                Edit
                            </a>
                            <a
                                href="#"
                                className="font-medium text-red-600 hover:underline ml-2"
                            >
                                Delete
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}