export function Dashboard() {

    return (
        <>
            <h1>dashboard</h1>
            <div className="container p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 ">
                    <div className="bg-green-400 text-white p-6 shadow-lg h-50 rounded-bl-3xl rounded-tr-3xl hover:bg-orange-800">
                        <div>
                            <h6 className="mb-4 text-xl">Number Of Fields</h6>
                            <h2 className="text-right flex items-center">
                                <i className="fab fa-delicious text-2xl mr-2"></i>
                                <span className="mt-4 text-lg">04</span>
                            </h2>
                        </div>
                    </div>

                    <div className="bg-green-800 text-white p-6 rounded-lg shadow-lg h-50 rounded-bl-3xl rounded-tr-3xl hover:bg-orange-800">
                        <div>
                            <h6 className="mb-4 text-xl">Number Of Crops</h6>
                            <h2 className="text-right flex items-center">
                                <i className="fab fa-delicious text-2xl mr-2"></i>
                                <span className="mt-4 text-lg">03</span>
                            </h2>
                        </div>
                    </div>


                    <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg h-50 rounded-bl-3xl rounded-tr-3xl hover:bg-orange-800">
                        <div>
                            <h6 className="mb-4 text-xl">Number Of Staff</h6>
                            <h2 className="text-right flex items-center">
                                <i className="fa-solid fa-people-group text-2xl mr-2"></i>
                                <span className="mt-4 text-lg">02</span>
                            </h2>
                        </div>
                    </div>

                    <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg h-50 rounded-bl-3xl rounded-tr-3xl hover:bg-orange-800">
                        <div>
                            <h6 className="mb-4 text-xl">Number Of Vehicles</h6>
                            <h2 className="text-right flex items-center">
                                <i className="fa-solid fa-truck text-2xl mr-2"></i>
                                <span className="mt-4 text-lg">02</span>
                            </h2>

                        </div>
                    </div>

                    <div className="bg-orange-600 text-white p-6 rounded-lg shadow-lg h-50 rounded-bl-3xl rounded-tr-3xl hover:bg-orange-800">
                        <div>
                            <h6 className="mb-4 text-xl">Number Of Equipments</h6>
                            <h2 className="text-right flex items-center">
                                <i className="fa-solid fa-trowel text-2xl mr-2"></i>
                                <span className="mt-4 text-lg">03</span>
                            </h2>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}