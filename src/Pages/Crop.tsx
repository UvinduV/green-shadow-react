import {useDispatch} from "react-redux";
import {openModal} from "../reducers/ModelSlice.ts";
import {NewCrop} from "./NewCrop.tsx";

export function Crop() {

    const dispatch = useDispatch();

    const handleAddCrop = () => {
        dispatch(openModal());
    };

    // const handleCloseModal = () => {
    //     dispatch(closeModal());
    // };
    //
    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log("Crop added!");
    //     dispatch(closeModal());
    // };
     return (
        <>
            <h1>Crop</h1>
            <div className="flex justify-end mt-4 mr-56">
                <button onClick={handleAddCrop}>New Crop</button>
            </div>

            {/* Crop Table */}
            <div
                className="relative overflow-x-auto w-5/6 shadow-md sm:rounded-lg mt-6 ml-28"
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{ duration: 0.5, delay: 0.4, ease: easeIn }}
            >
                <table className="w-full text-sm text-left rtl:text-right text-black">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3"></th>
                        <th scope="col" className="px-6 py-3">
                            Common Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Scientific Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Season
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Field Details
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-slate-100 cursor-pointer">
                    <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
                        <td className="px-6 py-4">
                            {/*<img src={field} alt="" className="w-24 h-24 rounded-full" />*/}
                        </td>
                        <td className="px-6 py-4">Crop 1</td>
                        <td className="px-6 py-4">Crop 1</td>
                        <td className="px-6 py-4">Fruit</td>
                        <td className="px-6 py-4">Winter</td>
                        <td className="px-6 py-4">Field 1</td>
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
                                Remove
                            </a>
                        </td>
                    </tr>
                    <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
                        <td className="px-6 py-4">
                            {/*<img src={field} alt="" className="w-24 h-24 rounded-full" />*/}
                        </td>
                        <td className="px-6 py-4">Crop 2</td>
                        <td className="px-6 py-4">Crop 2</td>
                        <td className="px-6 py-4">Fruit</td>
                        <td className="px-6 py-4">Winter</td>
                        <td className="px-6 py-4">Field 1</td>
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
                                Remove
                            </a>
                        </td>
                    </tr>
                    <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
                        <td className="px-6 py-4">
                            {/*<img src={field} alt="" className="w-24 h-24 rounded-full" />*/}
                        </td>
                        <td className="px-6 py-4">Crop 3</td>
                        <td className="px-6 py-4">Crop 3</td>
                        <td className="px-6 py-4">Fruit</td>
                        <td className="px-6 py-4">Winter</td>
                        <td className="px-6 py-4">Field 1</td>
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
                                Remove
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <NewCrop/>
            </div>

        </>
    )
}