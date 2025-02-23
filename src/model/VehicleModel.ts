export class VehicleModel {
    licensePlateNumber: string;
    vehicleCategory: string;
    fuelType: string;
    status: string;
    remarks: string;
    staffName: string;

    constructor(licensePlateNumber: string, vehicleCategory: string, fuelType: string, status: string, remarks: string, staffName: string) {
        this.licensePlateNumber = licensePlateNumber;
        this.vehicleCategory = vehicleCategory;
        this.fuelType = fuelType;
        this.status = status;
        this.remarks = remarks;
        this.staffName = staffName;
    }
}