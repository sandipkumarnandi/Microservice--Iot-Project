import { DtoBase } from "./submodules/atpl-api-common/DtoBase";

export class BalanceRecordsDto extends DtoBase {


    
    
    
    tenantId?: number;

    
    dateNTimeOfRecording?: Date;

    
    instrumentId?: number;

    
    verifiedBy?: number;

    
    stage?: number;

    
    verificationStatus?: boolean;

    
    verficationDate?: Date;


}