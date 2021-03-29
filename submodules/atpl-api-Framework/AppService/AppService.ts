import { HttpService } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums/http-status.enum";
import { HttpException } from "@nestjs/common/exceptions";
import { plainToClass } from "class-transformer";
import { ClassType } from "class-transformer/ClassTransformer";
import { ObjectType, Repository, SelectQueryBuilder } from "typeorm";
const objectMapper = require('object-mapper');
import { Convert, Converter } from '@fabio.formosa/metamorphosis';
import { EntityBase } from "../submodules/common/EntityBase";
import { DtoBase } from "../submodules/common/DtoBase";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { ResponseModel } from "../submodules/common/ResponseModel";
import { RequestModel, RequestModelQuery } from "../submodules/common/RequestModel";
import { ServiceOperationResultType } from "../submodules/common/ServiceOperationResultType";
import { ConditionalOperation } from "../submodules/common/conditionOperation";


@Injectable()
export default class AppService<TEntity extends EntityBase, TDto extends DtoBase>{
    

   
  private entityMap = {};
  private dtoMap = {};

  private entityToDtoMap = {};

  private dtoToEntitymap = {};
  private dict = {};
  public sns_sqs: any;

  constructor(public http:HttpService,private readonly genericRepository: Repository<TEntity>, private type3: ObjectType<TEntity>,private entityClassType:ClassType<TEntity>,private dtoClassType:ClassType<TDto>,entityMap: Record<string, unknown>, dtoMap: Record<string, unknown>, entityToDtoMap: Record<string, unknown>, dtoToEntityMap: Record<string, unknown>) {
    this.entityMap = entityMap;
    this.dtoMap = dtoMap;
    this.entityToDtoMap = entityToDtoMap;
    this.dtoToEntitymap = dtoToEntityMap;
   


    
    
  }
  addDtoMap(map: Record<string, unknown>) {
    this.entityMap = map;
  }
  addEntityMap(map: Record<string, unknown>) {
    this.dtoMap = map;
  }

  addEntityToDtoMap(map: Record<string, unknown>) {
    this.entityToDtoMap = map;
  }

  addDtoToEntityMap(map: Record<string, unknown>) {
    this.dtoToEntitymap = map;
  }

  async mapToDto(entities: TEntity[]): Promise<TDto[]>{
    try {
      let result: TDto[] = [];
      let dto: TDto;
      Promise.all(entities.map(async (entity: TEntity) => {
        await result.push(plainToClass(this.dtoClassType,objectMapper(entity,this.entityToDtoMap)))
      }))
      
      return result;
    }
    catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async mapToEntity(dtos: TDto[]): Promise<TEntity[]>{
    try {
      let result: TEntity[] = [];
      let entity: TEntity;
      
      Promise.all(dtos.map(async (dto: TDto) => {
                await result.push(plainToClass(this.entityClassType,objectMapper(dto,this.entityToDtoMap)))
      }))


      return result;
    }
    catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getByIds(id: any[]): Promise<ResponseModel<TDto>>{
    try {
      let final_result: ResponseModel<TDto> = new ResponseModel("123", null, null, "123", "123", "gft", null,null,null);
      console.log("ids...." + JSON.stringify(id));
      final_result.setDataCollection(await this.mapToDto(await this.genericRepository.findByIds(id)))
      return final_result;
    }
    catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }

  async getAll(): Promise<ResponseModel<TDto>> {
    try {
      let result = await this.genericRepository.find();

      
      let final_result: ResponseModel<TDto> = new ResponseModel("123", null, null, "123", "123", "gft", null,null,null);
      console.log("result is....." + JSON.stringify(result));
      final_result.setDataCollection(await this.mapToDto(result));
      return final_result;
    }
    catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async create(entity: RequestModel<TDto>): Promise<ResponseModel<TDto>> {
    try {
      await console.log("Inside insert of generic repository...entity is...." + JSON.stringify(entity));
      var result: TDto[] = [];
    
      let result1: any;
      //entity
      let requestGuid = entity.RequestGuid;
      let socketId = entity.SocketId;
     
      // let final_result: ResponseModel<TDto> = new ResponseModel(entity.RequestGuid,entity.SocketId, null, null, "123", "123", "gft", null);
      
      await Promise.all(entity.DataCollection.map(async (entity_sample) => {
        // console.log("Entity sample is......" + JSON.stringify(entity_sample));
        console.log("Map is......" + JSON.stringify(this.entityMap));
        // console.log("result....." + objectMapper(entity_sample, this.entityMap));
      
        result1 = await this.genericRepository.save(objectMapper(entity_sample, this.entityMap))
        console.log("result is......." + JSON.stringify(result1));
        // result1 = await this.genericRepository.save(entity_sample)
      
        await result.push(result1)
        await console.log("present result is......" + JSON.stringify(result));
      })
      );
      console.log("Returning result1....." + JSON.stringify(result));
      // result.forEach((entity:TEntity)=>)
      // let successResponseModel = ResponseModel<TDto>
      let final_result:ResponseModel<TDto> = new ResponseModel(entity.RequestGuid,null,ServiceOperationResultType.success,"200",null,null,null,entity.SocketId,entity.CommunityUrl)
      final_result.setDataCollection(result);
      final_result.setSocketId(entity.SocketId);
      return final_result;
      
      
    }
    catch (error){
      console.log("Error occured while inserting groups....." + error);
      let final_result:ResponseModel<TDto> = new ResponseModel(entity.RequestGuid,null,ServiceOperationResultType.error,"500",null,null,null,entity.SocketId,entity.CommunityUrl)

      throw new HttpException(final_result, HttpStatus.INTERNAL_SERVER_ERROR);
    };
    
  }

  async deleteById(ids: any[]): Promise<ResponseModel<TDto>> {
    const entities = await this.getByIds(ids);
    console.log("Entites to be deleted are......" + JSON.stringify(entities));
    
    if (entities.getDataCollection().length != 0) {
      let result = await this.mapToEntity(entities.getDataCollection());
      console.log("Result is....." + JSON.stringify(result));
      await this.genericRepository.remove(result);
      let final_result:ResponseModel<TDto> = new ResponseModel(null,null,null,"200",null,null,null,null,null)

      final_result.setDataCollection(entities.getDataCollection())
      return final_result;
    }
    // return await this.genericRepository.remove(ids)
    throw new HttpException("No such id found ", HttpStatus.NOT_FOUND);
  }

  async updateEntity(dtos: RequestModel<TDto>): Promise<ResponseModel<TDto>>{
    try {
      await console.log("Inside update of generic repository...entity is...." + JSON.stringify(dtos));
      var result: TDto[] = [];
      var ids: number[] = [];
      let result1: any;
      var result2: any;
      var entities: TEntity[] = [];
      await Promise.all(dtos.DataCollection.map(async (dto_sample:any) => {
        // console.log("Entity sample is......" + JSON.stringify(entity_sample));
        console.log("Map is......" + JSON.stringify(this.entityMap));
        // console.log("result....." + objectMapper(entity_sample, this.entityMap));
        await entities.push(objectMapper(dto_sample, this.entityMap));
        result1 = await this.genericRepository.update(dto_sample.Id, dto_sample);
        // result2 = await this.genericRepository.merge()
        // const entity = await this.genericRepository.findOne(dto_sample.Id);
        // result1 = this.genericRepository.save(id:dto_sample.id, ...dto_sample);
        await result.push(result1);
        console.log("result is......." + JSON.stringify(result1));
        await console.log("present result is......" + JSON.stringify(result));
      })
      );
      let final_result:ResponseModel<TDto> = new ResponseModel(dtos.RequestGuid,null,ServiceOperationResultType.success,"200",null,null,null,dtos.SocketId,dtos.CommunityUrl)
      final_result.setDataCollection(dtos.DataCollection);
      return final_result;
      
    }
    catch (err)
    {
      let final_result:ResponseModel<TDto> = new ResponseModel(dtos.RequestGuid,null,ServiceOperationResultType.failure,"500",null,null,[err],dtos.SocketId,dtos.CommunityUrl)
      final_result.setDataCollection(dtos.DataCollection);
      throw new HttpException(final_result, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }





  private async assignConditionsToRequestModelQuery(requestModel:RequestModelQuery,queryField:SelectQueryBuilder<TEntity>):Promise<SelectQueryBuilder<TEntity>>{
    try{
    console.log("Length is...." + requestModel.Filter.Conditions.length + "\n\n\n\n\n\n\n");
      let i = 0;
      if (requestModel.Filter.Conditions != null && requestModel.Filter.Conditions.length > 0) {
        i = requestModel.Filter.Conditions.length;

        let myJSON = {}
        // myJSON[requestModel.Filter.Conditions[0].FieldName] = requestModel.Filter.Conditions[0].FieldValue;
        
        let fieldValue = requestModel.Filter.Conditions[0].FieldValue;
        console.log("Myjson init is......" + JSON.stringify(myJSON));
        if (requestModel.Filter.Conditions[0].FieldName.indexOf('.') > -1) {
          if (typeof (fieldValue) == typeof ('')) {
            myJSON['fieldName' + 0] = `%${requestModel.Filter.Conditions[0].FieldValue}%`;
            queryField = queryField.andWhere(requestModel.Filter.Conditions[0].FieldName + " LIKE :fieldName"+0, myJSON);
          }
          else if(fieldValue == null){
            myJSON['fieldName' + 0] = requestModel.Filter.Conditions[0].FieldValue;
            queryField = queryField.andWhere(requestModel.Filter.Conditions[0].FieldName + " is NULL");
          }
          else {
            myJSON['fieldName' + 0] = requestModel.Filter.Conditions[0].FieldValue;
            queryField = queryField.andWhere(requestModel.Filter.Conditions[0].FieldName + "=:fieldName"+0, myJSON);
          }

        }
        else {
          if (typeof (fieldValue) == typeof ('')) {
            myJSON['fieldName' + 0] = `%${requestModel.Filter.Conditions[0].FieldValue}%`;
            queryField = queryField.andWhere(requestModel.Children[0] + "." + requestModel.Filter.Conditions[0].FieldName + " LIKE :fieldName"+0, myJSON);
          }
          else if(fieldValue == null){
            myJSON['fieldName' + 0] = requestModel.Filter.Conditions[0].FieldValue;
            queryField = queryField.andWhere(requestModel.Children[0] + "." + requestModel.Filter.Conditions[0].FieldName +  " is NULL");
          }
          else {
            myJSON['fieldName' + 0] = requestModel.Filter.Conditions[0].FieldValue;
            queryField = queryField.andWhere(requestModel.Children[0] + "." + requestModel.Filter.Conditions[0].FieldName + "=:fieldName"+0, myJSON);
          }
          // console.log("Myjson init 2 ......." + requestModel.Children[0] + "." + requestModel.Filter.Conditions[0].FieldName + "=:fieldName"+0, myJSON);
          // queryField = queryField.andWhere(requestModel.Children[0] + "." + requestModel.Filter.Conditions[0].FieldName + "=:fieldName"+0, myJSON);
        }
        console.log("\n\n\n\n\nBefore entering second condition.....query generated is........" + queryField.getQuery() + "\n\n\n\n\n\n\n\n\n\n");
        let str1 = '';
        for (i = 1; i < requestModel.Filter.Conditions.length; i++) {
          if (requestModel.Filter.Conditions[i].FieldName.indexOf('.') > -1)
            str1 = requestModel.Filter.Conditions[i].FieldName
            
          else
            str1 = requestModel.Children[0] + "." + requestModel.Filter.Conditions[i].FieldName
          console.log("hiiii.........");
          console.log(requestModel.Filter.Conditions[i]);
          console.log("All conditions are..........." + JSON.stringify(requestModel.Filter.Conditions));
          console.log("\n\nrequestModel.Filter.Conditions[i-1].ConditionalSymbol is...." + requestModel.Filter.Conditions[i - 1].ConditionalSymbol);
          console.log("type is......" + typeof (requestModel.Filter.Conditions[i - 1].ConditionalSymbol));
          let fieldValue: any = requestModel.Filter.Conditions[i].FieldValue;
          if (requestModel.Filter.Conditions[i-1].ConditionalSymbol == ConditionalOperation.Or) {
            let myJSON = {};
            if (typeof (fieldValue) == typeof ('')) {
              myJSON['fieldName' + i] = `%${requestModel.Filter.Conditions[i].FieldValue}%`;
              queryField = queryField.orWhere(str1 + " LIKE :fieldName"+i, myJSON);
            }
            else if(fieldValue==null){
              queryField = queryField.orWhere(str1 + " is null ");
            }
            else {
              myJSON['fieldName' + i] = requestModel.Filter.Conditions[i].FieldValue;
              queryField = queryField.orWhere(str1 + "=:fieldName"+i, myJSON);
            }
            // `%${ requestModel.Filter.Conditions[i].FieldValue }%`
            // myJSON['fieldName'+i] = `%${ requestModel.Filter.Conditions[i].FieldValue }%`;
            // console.log("\n\n\n\nMyjson1 is......" + myJSON);
            // // queryField = queryField.orWhere(str1 + "=:fieldName" + i, myJSON);
            // queryField = queryField.orWhere(str1 + " LIKE :fieldName"+i, myJSON);
          }
          else {
            let myJSON = {};
            if (typeof (fieldValue) == typeof ('')) {
              myJSON['fieldName' + i] = `%${requestModel.Filter.Conditions[i].FieldValue}%`;
              queryField = queryField.andWhere(str1 + " LIKE :fieldName"+i, myJSON);
            }
            else {
              myJSON['fieldName' + i] = requestModel.Filter.Conditions[i].FieldValue;
              queryField = queryField.andWhere(str1 + "=:fieldName"+i, myJSON);
            }
            // myJSON['fieldName'+i] = `%${ requestModel.Filter.Conditions[i].FieldValue }%`;
            // console.log("\n\n\n\nMyjson2 is......" + JSON.stringify(myJSON));
            // // queryField = queryField.andWhere(str1+ "=:fieldName"+i , myJSON);
            // queryField = queryField.andWhere(str1+ " LIKE :fieldName"+i , myJSON);
          }
        }
      }
      return queryField;
    }
    catch (err) {
      console.log("Error thrown from assignConditionsToRequestModelQuery....... Error is....."+JSON.stringify(err));
      throw err;
    }
  }






  private async createQueryByRequestModelQuery(requestModel: RequestModelQuery): Promise<SelectQueryBuilder<TEntity>>{
    try { 
      console.log("Inside createQueryByRequestModelQuery baby......requestModel is...." + JSON.stringify(requestModel));
      let orderBy = requestModel.Filter.IsOrderByFieldAsc==null?true:requestModel.Filter.IsOrderByFieldAsc;
      let orderByField = requestModel.Filter.OrderByField == null ? 'Id' : requestModel.Filter.OrderByField;
      let isCaseInsensitiveSearch = false;
      // if (requestModel != null && requestModel.Filter != null) {
      //   orderBy = !requestModel.Filter.IsOrderByFieldAsc ? 'DESC' : orderBy;
      //   orderByField = requestModel.Filter.OrderByField != null ? requestModel.Filter.OrderByField : orderByField;

      // }

      console.log("requestmodel.children is....." + requestModel.Children)


      console.log("here......12345");
      
      let queryField = this.genericRepository.createQueryBuilder(requestModel.Children[0]);
      console.log(queryField.getSql()+ "checking errors");
      // let x = queryField.getMany();
      // console.log("x is...."+JSON.stringify(x));
      
      // console.log("QueryField is,........"+JSON.stringify(queryField))
      // if (select != null) {
      //   console.log("\n\n\n\nelect != null.....................\n\n\n\n\n")
      //   queryField.addSelect("COUNT('groupUser.groupId')",'count_temp')
      // }
      // let result123 = await this.genericRepository.query('SELECT COUNT(DISTINCT("groupUser"."id")) AS "cnt" FROM "groupUsers" "groupUser" INNER JOIN "users" "user" ON "user"."id"="groupUser"."user_id"  INNER JOIN "groups" "group" ON "group"."id"="groupUser"."group_id" WHERE "groupUser"."group_image"=\'groupImage2\'');

      if (requestModel.Children != null && requestModel.Children.length > 0) {
        for (let i = 1; i < requestModel.Children.length; i++) {
          queryField = queryField.leftJoinAndSelect(requestModel.Children[i-1] + "." + requestModel.Children[i], requestModel.Children[i]);
        }
      }
      console.log("After passing children.....queryField is....." + queryField.getSql());
     console.log("1st half query result is........" + queryField.getMany());
      
      // if (select != null) {
        // return queryField.select(['groupUser.Id', "COUNT('groupUser.Id')"])
        // return queryField.select([ "COUNT('groupUser.Id')"])
        // queryField = queryField.select('groupUser.groupId',"groupId");
        // queryField = queryField.addSelect("COUNT(groupUser.Id)", 'count')
        // queryField = queryField.select("COUNT(groupUser.Id)", 'count')
        // queryField = queryField.addSelect('user.userEmail','userEmail')
        // return queryField.select(['groupUser.groupId', "COUNT(\"groupUser\".\"id\")"])
      // }

      queryField = await this.assignConditionsToRequestModelQuery(requestModel,queryField);

      if (orderBy == true)
        return queryField.orderBy(requestModel.Children[0] + "." + orderByField, 'ASC');
      else
        return queryField.orderBy(requestModel.Children[0] + "." +orderByField,'DESC');


      return queryField;
    }
    catch (err) {
      console.log("Error thrown from createQueryByRequestModelQuery....... Error is....."+JSON.stringify(err));
      throw err;
    }
    
  }






  public async divideQueryByPageSizeAndPageNo(requestModel:RequestModelQuery,queryField:SelectQueryBuilder<TEntity>):Promise<SelectQueryBuilder<TEntity>>{
    try{
      if (requestModel.Filter.PageInfo != null) {
        queryField = queryField.skip((requestModel.Filter.PageInfo.PageSize) *
          (requestModel.Filter.PageInfo.PageNumber - 1))
          .take(requestModel.Filter.PageInfo.PageSize);
      }
      return queryField;
  }
  catch (err) {
    console.log("Error thrown from createQueryByRequestModelQuery....... Error is....."+JSON.stringify(err));
    throw err;
  }
  }






  public async search(requestModel: RequestModelQuery,entityArray?:Array<Array<string>>): Promise<ResponseModel<TDto>> {
    try {
      let queryField:any = null;
     
      
        queryField = await this.createQueryByRequestModelQuery(requestModel);
      

      queryField = await this.divideQueryByPageSizeAndPageNo(requestModel,queryField);
      
      // let totalRecords = await queryField.getCount();
      // console.log("totalRecords is....." + JSON.stringify(totalRecords));
      
      // if (requestModel.Filter.PageInfo != null) {
      //   queryField= queryField.
      //     take(19);
      // }
    
      console.log("Final Ultimate Query is.................." + queryField.getSql());
      let result: any = await queryField.getMany();
      let final_result: ResponseModel<TDto> = new ResponseModel("SampleInbuiltRequestGuid", null, ServiceOperationResultType.success, "200", null, null, null, null, null)
      console.log("Setting result......")
      await final_result.setDataCollection(result);
      console.log("Final_result is......" + JSON.stringify(final_result));
      
      console.log("\n\n\n\n\nresult1 is....." + JSON.stringify(result));
      return final_result;
    }
    catch (err) {
      console.log("Error is......." + JSON.stringify(err));
      let final_result: ResponseModel<TDto> = new ResponseModel("SampleInbuiltRequestGuid", null, ServiceOperationResultType.error, "500", null, null, null, null, err)

      throw final_result;
    };
    
  }







}