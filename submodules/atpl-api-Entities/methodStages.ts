import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("method_stages")
@Index("IX_method_stages_reference_stage_id", ["referenceStageId"])
@Index("IX_method_stages_stage_id", ["stageId"])
@Index("uq_methodstages_methodid_stageid", ["methodId","stageId"],{unique:true})
export default class MethodStages extends EntityBase {

  

  @Column({ name:'method_id', nullable:false })
  methodId: number;

  @Column({ name:'stage_id' , nullable:false })
  stageId: number;

  @Column({ name:'reference_stage_id', type:"text" , nullable:true })
  referenceStageId: number;

  

  
}