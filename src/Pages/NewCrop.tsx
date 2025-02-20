// import {Modal} from "../component/Model.tsx";
// import React from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {closeModal} from "../reducers/ModelSlice.ts";
//
// export function NewCrop() {
//     const isModalOpen = useSelector((state) => state.modal.isModalOpen);
//     const dispatch = useDispatch();
//
//     const handleCloseModal = () => {
//         dispatch(closeModal());
//     };
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log("Crop added!");
//         dispatch(closeModal());
//     };
//
//     return (
//         <>
//             <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
//                 <h2>Add New Crop</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label>Common Name</label>
//                         <input type="text" required/>
//                     </div>
//                     <div className="mb-4">
//                         <label>Scientific Name</label>
//                         <input type="text" required/>
//                     </div>
//                     <div className="mb-4">
//                         <label>Crop Image</label>
//                         <input type="file" accept=""/>
//                     </div>
//                     <div className="mb-4">
//                         <label>Category</label>
//                         <input type="text" required/>
//                     </div>
//                     <div className="mb-4">
//                         <label>Season</label>
//                         <input type="text" required/>
//                     </div>
//                     <div className="mb-4">
//                         <label>Field Details</label>
//                         <select name="" id=""></select>
//                     </div>
//
//                 </form>
//             </Modal>
//         </>
//     )
// }