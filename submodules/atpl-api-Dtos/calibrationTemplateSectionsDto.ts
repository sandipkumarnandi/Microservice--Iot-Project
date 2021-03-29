import { DtoBase } from "./submodules/atpl-api-common/DtoBase";

export class CalibrationTemplateSectionsDto extends DtoBase {


    
    calibrationTemplateId?: number;

   
    sectionName?: string;

    
    sectionDescription?: string;

   
    sectionType?: number;

    
    noOfMeasurementsOrPositions?: number;

   
    unit?: string;




}