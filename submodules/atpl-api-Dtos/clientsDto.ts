import { DtoBase } from "./submodules/atpl-api-common/DtoBase";

export class ClientsDto extends DtoBase {


    
   
    tenantId?: number;
  
    
    clientName?: string;
  
    
    clientAddressId?: number;
  
    
    clientDetails?: string;
  
    
    subscriptionStartDate?: Date;
  
    
    isActive?: boolean;
    
    
    clientUserId?: number;




}