import { DtoBase } from "./submodules/atpl-api-common/DtoBase";

export class CalibrationTemplateSectionDetailsDto extends DtoBase {


    calibrationTemplateSectionId?: number;

   
    predefined_weight?: number;

   
    acceptanceCriteria?: string;

    
    standardCalibrationWeight?: number;

   
    correlationCoefficient?: string;

  
    unit?: string;



}