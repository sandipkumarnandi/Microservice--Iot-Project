import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { IotDevicesDto } from "submodules/atpl-api-Dtos/iotDevicesDto";

import IotDevices from "submodules/atpl-api-Entities/iotDevices";
import AppService from "submodules/atpl-api-Framework/AppService/AppService";

import { Repository } from "typeorm";
let dto = require('../../submodules/atpl-api-Mappings/iotDevicesMapper')

@Injectable()
export class IotDevicesFacade extends AppService<IotDevices, IotDevicesDto> {
  // private map: Maps;
    constructor(@InjectRepository(IotDevices) private readonly IotDevicesRepository: Repository<IotDevices>,public http:HttpService) {
      super(http,IotDevicesRepository,IotDevices,IotDevices,IotDevicesDto,dto.iotDevicesentityJson, dto.iotDevicesdtoJson,dto.iotDevicesentityToDtoJson, dto.iotDevicesdtoToEntityJson);
    }
  
}