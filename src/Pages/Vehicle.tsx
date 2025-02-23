import {Modal} from "../component/Model.tsx";
import React, {useState} from "react";
import {StaffModel} from "../model/StaffModel.ts";
import {closeModal, openModal} from "../reducers/ModelSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store/Store.ts";
import {saveCrop} from "../reducers/CropSlice.ts";
import {VehicleModel} from "../model/VehicleModel.ts";
import {saveVehicle} from "../reducers/VehicleSlice.ts";

export function Vehicle() {
    const dispatch = useDispatch<AppDispatch>();
    const isModalOpen = useSelector((state) => state.modal.isModalOpen);
    const staffNames = useSelector((state) => state.staff);

    const [licensePlateNumber,setLicensePlateNumber] = useState("");
    const [vehicleCategory, setVehicleCategory] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [Status, setStatus] = useState("");
    const [remarks, setRemarks] = useState("");
    const [staffName, setStaffName] = useState("");

    const [isEditing, setIsEditing] = useState(false);

    const handleAdd = () => {
        if (!licensePlateNumber || !vehicleCategory || !fuelType ) {
            alert("All fields are required!")
            return
        }
        const newVehicle = new VehicleModel(licensePlateNumber,vehicleCategory,fuelType,Status,remarks,staffName);
        dispatch(saveVehicle(newVehicle));
        alert("Vehicle added successfully!");
        resetForm();
        dispatch(closeModal());
    }
    const handleUpdate= () =>{
        if (!licensePlateNumber || !vehicleCategory || !fuelType ) {
            alert("All fields are required!")
            return
        }
    }
    const handleDelete= (licensePlateNumber :string) =>{
        if (window.confirm("Are you sure you want to delete this Vehicle?")) {

            console.log("vehicle deleted!", licensePlateNumber);
        }
    }
    const resetForm = () => {
        setLicensePlateNumber("")
        setVehicleCategory("")
        setFuelType("")
        setStatus("")
        setRemarks("")
        setStaffName("")
        setIsEditing(false)
    }


    const handleAddVehicle = () => {
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
            <h1>Vehicle</h1>
            <div className="flex justify-end mt-4 mr-56">
                <button onClick={handleAddVehicle}>New Vehicle</button>
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

                    </tbody>
                </table>

            </div>


            {/*ADD Vehicle*/}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h2>Vehicle Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text" name="licensePlateNumber" placeholder="Vehicle Number : Eg:LH-XXXX"
                            value={licensePlateNumber}
                            onChange={(e) => setLicensePlateNumber(e.target.value)}
                            className="border p-2 rounded"
                            required
                        />
                    </div>
                    <div className="flex gap-4 mb-4">
                        <label>Vehicle Category :</label>
                        <select
                            name="vehicleCategory"
                            value={vehicleCategory}
                            onChange={(e) => setVehicleCategory(e.target.value)}
                            id=""
                            className="border p-2 rounded"
                        >
                            <option value="">Select Category</option>
                            <option value="LORRY">Lorry</option>
                            <option value="VAN">Van</option>
                            <option value="TRACTOR">Tractor</option>
                            <option value="CAR">car</option>
                            <option value="OTHER">Other</option>

                        </select>
                    </div>
                    <div className="flex gap-4 mb-4">
                        <label>Fuel Type :</label>
                        <select
                            name="fuelType"
                            value={fuelType}
                            onChange={(e) => setFuelType(e.target.value)}
                            id=""
                            className="border p-2 rounded"
                        >
                            <option value="">Select fuel Type</option>
                            <option value="DIESEL">Diesel</option>
                            <option value="PETROL">Petrol</option>
                            <option value="HYBRID">Hybrid</option>
                            <option value="ELECTRIC">Electric</option>
                        </select>
                    </div>
                    <div className="flex gap-4 mb-4">
                        <label>Status :</label>
                        <select
                            name="Status"
                            value={Status}
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
                            name="staff Name"
                            value={staffName}
                            onChange={(e) => setStaffName(e.target.value)}
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