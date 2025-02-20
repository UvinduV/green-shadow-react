export class CropModel {
    commonName: string;
    scientificName: string;
    cropImage: string;
    Category: string;
    Season: string;
    fieldName: string;

    constructor(commonName: string, scientificName: string, cropImage: string, category: string, season: string, fieldName: string ) {
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.cropImage = cropImage;
        this.Category = category;
        this.Season = season;
        this.fieldName = fieldName;
    }

}