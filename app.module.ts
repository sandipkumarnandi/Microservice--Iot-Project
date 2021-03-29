import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { TypeOrmModule } from '@nestjs/typeorm';

import IotDevices from './submodules/atpl-api-Entities/iotDevices';


import { IotDevicesRoutes } from 'app/Routes/iotDevicesRoutes';

import { IotDevicesFacade } from 'app/Facade/iotDevicesFacade';




@Module({
  imports: [ HttpModule,
    TypeOrmModule.forFeature(
    [ IotDevices ],
  ),

  TypeOrmModule.forRoot(),
    
  ],
  controllers: [AppController,IotDevicesRoutes],
  providers: [IotDevicesFacade],
})
export class AppModule {}