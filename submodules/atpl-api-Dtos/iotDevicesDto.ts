import { DtoBase } from "./submodules/atpl-api-common/DtoBase";

export class  IotDevicesDto extends DtoBase {
    
  
  tenantId?: number;


  iotDeviceName?: string;

  
  description?: string;
  

  isActive?: boolean;

  
  iotDeviceGuid?: string;

 
  iotDeviceConnectionPort?: string;

 
  clientId?: number;




}