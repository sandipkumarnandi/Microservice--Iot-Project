import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("sample_method_stages")
@Index("IX_sample_method_stages_method_stage_grid_column_id", ["methodStageGridColumnId"])
@Index("uq_samplemethodstages_sampleid_methodstagegridcolumnid", ["methodStageGridColumnId"],{unique:true})
export default class SampleMethodStages extends EntityBase {

  

  @Column({ name:'sample_id', nullable:false })
  sampleId: number;

  @Column({ name:'method_stage_grid_column_id', nullable:false })
  methodStageGridColumnId: number;

  @Column({ name:'no_of_rows', nullable:false })
  noOfRows: number;
  

  
}