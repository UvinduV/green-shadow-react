import {Modal} from "../component/Model.tsx";
import {StaffModel} from "../model/StaffModel.ts";
import React, {useState} from "react";
import {FieldModel} from "../model/FieldModel.ts";
import {closeModal, openModal} from "../reducers/ModelSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store/Store.ts";
import {EquipmentModel} from "../model/EquipmentModel.ts";
import {saveEquipment} from "../reducers/EquipmentSlice.ts";

export function Equipment(){
    const dispatch = useDispatch<AppDispatch>();
    const isModalOpen = useSelector((state) => state.modal.isModalOpen);
    const staffNames = useSelector((state) => state.staff);
    const fieldNames = useSelector((state) => state.field);

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [status, setStatus] = useState("");
    const [remarks, setRemarks] = useState("");
    const [staffId, setStaffId] = useState("");
    const [fieldId, setFieldId] = useState("");

    const [isEditing, setIsEditing] = useState(false);

    const handleAdd = () => {
        if (!name || !type || !staffId ) {
            alert("All fields are required!")
            return
        }
        const newEquipment = new EquipmentModel(name,type,status,remarks,staffId,fieldId)
        dispatch(saveEquipment(newEquipment))
        alert("Equipment added successfully!");
        resetForm();
        dispatch(closeModal());
    }
    const handleUpdate= () =>{
        if (!name || !type || !staffId ) {
            alert("All fields are required!")
            return
        }

        alert("Equipment updated successfully!")
        resetForm();
        dispatch(closeModal());
    }
    const resetForm = () => {
        setName("")
        setType("")
        setStatus("")
        setRemarks("")
        setStaffId("")
        setFieldId("")
        setIsEditing(false)
    }



    const handleAddEqu = () => {
        dispatch(openModal());
    };
    const handleCloseModal = () => {
        dispatch(closeModal());
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Vehicle added!");
        dispatch(closeModal());
    };
    return (
        <>
            <h1>Equipment</h1>
            <div className="flex justify-end mt-4 mr-56">
                <button onClick={handleAddEqu}>New Equipment</button>
            </div>

            {/*Equipment Table */}
            <div
                className="relative overflow-x-auto w-5/6 shadow-md sm:rounded-lg mt-6 ml-28"
            >
                <table className="w-full text-sm text-left rtl:text-right text-black">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Equipment Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Assigned staff
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-slate-100 cursor-pointer">

                    <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
                        <td className="px-6 py-4">3</td>
                        <td className="px-6 py-4">Harrow</td>
                        <td className="px-6 py-4">Mechanical</td>
                        <td className="px-6 py-4">Available</td>
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


            {/*ADD Equipment*/}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h2>Equipment Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text" name="name" placeholder="Equipment Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border p-2 rounded"
                            required
                        />
                    </div>
                    <div className="flex gap-4 mb-4">
                        <label>Equipment Type :</label>
                        <select
                            name="type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            id=""
                            className="border p-2 rounded"
                        >
                            <option value="">Select Equipment Type</option>
                            <option value="ELECTRICAL">Equipment</option>
                            <option value="MECHANICAL">Mechanical</option>

                        </select>
                    </div>
                    <div className="flex gap-4 mb-4">
                        <label>Status :</label>
                        <select
                            name="Status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            id=""
                            className="border p-2 rounded"
                        >
                            <option value="">Select Status</option>
                            <option value="AVAILABLE">Available</option>
                            <option value="UNAVAILABLE">Unavailable</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <input
                            type="text" name="remarks" placeholder="Remarks"
                            value={remarks}
                            onChange={(e) => setRemarks(e.target.value)}
                            className="border p-2 rounded"
                            required
                        />
                    </div>
                    <div className="flex gap-4 mb-4">
                        <label>Staff Details</label>
                        <select
                            name="staffId"
                            value={staffId}
                            onChange={(e) => setStaffId(e.target.value)}
                            id=""
                            className="border p-2 rounded"
                        >
                            <option value="">Select Staff</option>
                            {staffNames.map((staff: StaffModel, index) => (
                                <option key={index} value={staff}>
                                    {staff}
                                </option>
                            ))}

                        </select>
                    </div>
                    <div className="flex gap-4 mb-4">
                        <label>Field Details</label>
                        <select
                            name="fieldId"
                            value={fieldId}
                            onChange={(e) => setFieldId(e.target.value)}
                            id=""
                            className="border p-1 rounded"
                        >
                            <option value="">Select Field</option>
                            {fieldNames.map((field: FieldModel, index) => (
                                <option key={index} value={field}>
                                    {field}
                                </option>
                            ))}

                        </select>
                    </div>

                    <div className="flex justify-end">
                        {isEditing ? (
                            <button
                                onClick={handleUpdate}
                            >
                                Update
                            </button>
                        ) : (
                            <button
                                onClick={handleAdd}
                            >
                                Add
                            </button>
                        )}
                        {isEditing && (
                            <button
                                onClick={resetForm}
                                className="bg-gray-500 text-white p-2 rounded"
                            >
                                Cancel
                            </button>
                        )}
                    </div>

                </form>
            </Modal>
        </>
    )
}