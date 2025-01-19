export function Vehicle() {
    return (
        <>
            <h1>Vehicle</h1>
            <div className="flex justify-end mt-4 mr-56">
                <button>New Vehicle</button>
            </div>

            {/* Vehicle Table */}
            <div
                className="relative overflow-x-auto w-5/6 shadow-md sm:rounded-lg mt-6 ml-28"
            >
                <table className="w-full text-sm text-left rtl:text-right text-black">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Vehicle Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Vehicle Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fuel Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Remarks
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Staff
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-slate-100 cursor-pointer">
                    <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
                        <td className="px-6 py-4">LH-5645</td>
                        <td className="px-6 py-4">Lorry</td>
                        <td className="px-6 py-4">Diesel</td>
                        <td className="px-6 py-4">Available</td>
                        <td className="px-6 py-4">Heavy duty</td>
                        <td className="px-6 py-4">Kamal</td>
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
                        <td className="px-6 py-4">LI-5645</td>
                        <td className="px-6 py-4">Lorry</td>
                        <td className="px-6 py-4">Diesel</td>
                        <td className="px-6 py-4">Available</td>
                        <td className="px-6 py-4">Heavy duty</td>
                        <td className="px-6 py-4">Kamal</td>
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
                        <td className="px-6 py-4">LW-5645</td>
                        <td className="px-6 py-4">Lorry</td>
                        <td className="px-6 py-4">Diesel</td>
                        <td className="px-6 py-4">Available</td>
                        <td className="px-6 py-4">Heavy duty</td>
                        <td className="px-6 py-4">Kamal</td>
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