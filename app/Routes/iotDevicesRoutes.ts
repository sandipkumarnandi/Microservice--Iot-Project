import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IotDevicesFacade } from 'app/Facade/iotDevicesFacade';
import { SNS_SQS } from 'submodules/atpl-api-AWS/SNS_SQS';
import { IotDevicesDto } from 'submodules/atpl-api-Dtos/iotDevicesDto';
import { RequestModel, RequestModelQuery } from 'submodules/atpl-api-Framework/submodules/common/RequestModel';
import { ResponseModel } from 'submodules/atpl-api-Framework/submodules/common/ResponseModel';
let SOCKET_CONNECTED = 0;





@Controller('iotdevices')
export class IotDevicesRoutes {

  constructor(private readonly iotDeviceFacade: IotDevicesFacade) { }


  private sns_sqs = SNS_SQS.getInstance();
  private topicArray = ['IOTDEVICE_ADD', 'IOTDEVICE_UPDATE', 'IOTDEVICE_DELETE'];
  private serviceName = ['IOT_SERVICE', 'IOT_SERVICE', 'IOT_SERVICE'];
  private community_children_array = []


  @Post('connected/:id')
  async moduleInit(@Param('id') pk: string) {
    let noOfSocket = parseInt(pk);

    if ((SOCKET_CONNECTED === 0 && noOfSocket > 0)) {
      SOCKET_CONNECTED = 1;

      console.log("inside sns for connection");

      for (var i = 0; i < this.topicArray.length; i++) {
        this.sns_sqs.listenToService(noOfSocket, this.topicArray[i], this.serviceName[i], (() => {
          var value = this.topicArray[i];
          return async (result) => {
            await console.log("Result is........" + JSON.stringify(result));
            try {
              let responseModelOfGroupDto: any = null;
              console.log(`listening to  ${value} topic.....result is....`);
              // ToDo :- add a method for removing queue message from queue....
              switch (value) {
                case 'IOTDEVICE_ADD':
                  console.log("Inside IOTDEVICE_ADD Topic");
                  responseModelOfGroupDto = this.createIotDevice(result["message"]);
                  break;
                case 'IOTDEVICE_UPDATE':
                  console.log("Inside IOTDEVICE_UPDATE Topic");
                  var id = result.message.Id;
                  responseModelOfGroupDto = this.updateIotDevice(id, result["message"]);
                  break;
                case 'IOTDEVICE_DELETE':
                  console.log("Inside IOTDEVICE_DELETE Topic");
                  var id = result.message.Id;
                  responseModelOfGroupDto = this.deleteIotDevice(id);
                  break;

              }

              console.log("Result of aws  is...." + JSON.stringify(result));
              // let responseModelOfGroupDto = this.userFacade.create(result["message"]);

              //this.creategroup(result["message"])
              for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
                const element = result.OnSuccessTopicsToPush[index];
                var id = result.message.Id;
                this.sns_sqs.publishMessageToTopic(element, result["message"], id)
              }
            }
            catch (error) {
              await console.log("Inside Catch.........");
              await console.log(error, result);
              for (let index = 0; index < result.OnFailureTopicsToPush.length; index++) {
                const element = result.OnFailureTopicsToPush[index];
                var id = result.message.Id;
                this.sns_sqs.publishMessageToTopic(element, result["message"], id);
              }

            }
          }
        })())
      }

    }
    if (noOfSocket === 0) {
      SOCKET_CONNECTED=0;
      console.log("inside sns for disconnection");

      for (var i = 0; i < this.topicArray.length; i++) {
        this.sns_sqs.listenToService(noOfSocket, this.topicArray[i], this.serviceName[i], (() => {
          var value = this.topicArray[i];
          return async (result) => {
            await console.log("Result is........" + JSON.stringify(result));
            try {
              let responseModelOfGroupDto: any = null;
              console.log(`listening to  ${value} topic.....result is....`);
              // ToDo :- add a method for removing queue message from queue....
              switch (value) {
                case 'IOTDEVICE_ADD':
                  console.log("Inside IOTDEVICE_ADD Topic");
                  responseModelOfGroupDto = this.createIotDevice(result["message"]);
                  break;
                case 'IOTDEVICE_UPDATE':
                  console.log("Inside IOTDEVICE_UPDATE Topic");
                  var id = result.message.Id;
                  responseModelOfGroupDto = this.updateIotDevice(id, result["message"]);
                  break;
                case 'IOTDEVICE_DELETE':
                  console.log("Inside IOTDEVICE_DELETE Topic");
                  var id = result.message.Id;
                  responseModelOfGroupDto = this.deleteIotDevice(id);
                  break;

              }

              console.log("Result of aws  is...." + JSON.stringify(result));
              // let responseModelOfGroupDto = this.userFacade.create(result["message"]);

              //this.creategroup(result["message"])
              for (let index = 0; index < result.OnSuccessTopicsToPush.length; index++) {
                const element = result.OnSuccessTopicsToPush[index];
                var id = result.message.Id;
                this.sns_sqs.publishMessageToTopic(element, result["message"], id)
              }
            }
            catch (error) {
              await console.log("Inside Catch.........");
              await console.log(error, result);
              for (let index = 0; index < result.OnFailureTopicsToPush.length; index++) {
                const element = result.OnFailureTopicsToPush[index];
                var id = result.message.Id;
                this.sns_sqs.publishMessageToTopic(element, result["message"], id);
              }

            }
          }
        })())
      }

    }




  }



  @Post('query/:id')
  async getQuery(@Param('id') pk: string, @Body() body: RequestModelQuery): Promise<ResponseModel<IotDevicesDto>> {
    try {
      console.log("Inside controller ......Query");
      return this.iotDeviceFacade.search(body);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/:pk')
  getIotDeviceByIds(@Param('pk') pk: string): Promise<ResponseModel<IotDevicesDto>> {
    try {
      console.log("id is............." + JSON.stringify(pk));

      return this.iotDeviceFacade.getByIds([pk]);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get("/")
  allDevice() {
    try {
      console.log("Inside controller ......Iot Device");
      return this.iotDeviceFacade.getAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post("/")
  async createIotDevice(@Body() body: RequestModel<IotDevicesDto>): Promise<ResponseModel<IotDevicesDto>> {  //requiestmodel<GroupDto></GroupDto>....Promise<ResponseModel<Grou[pDto>>]
    try {
      await console.log("Inside CreateIotDevice of controller....body id" + JSON.stringify(body));
      return await this.iotDeviceFacade.create(body);
    } catch (error) {
      await console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put("/:id")
  async updateIotDevice(@Param('id') id: number, @Body() body: RequestModel<IotDevicesDto>): Promise<ResponseModel<IotDevicesDto>> {  //requiestmodel<GroupDto></GroupDto>....Promise<ResponseModel<Grou[pDto>>]
    try {
      await console.log("Inside CreateIotDevice of controller....body id" + JSON.stringify(body));
      body.DataCollection.forEach((dto: IotDevicesDto) => {
        dto.Id = id;
      })
      return await this.iotDeviceFacade.updateEntity(body);
    } catch (error) {
      await console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @Delete('/:id')
  deleteIotDevice(@Param('id') pk: string): Promise<ResponseModel<IotDevicesDto>> {
    try {
      console.log("Id is......" + pk);
      return this.iotDeviceFacade.deleteById([parseInt(pk, 10)])
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }





}



