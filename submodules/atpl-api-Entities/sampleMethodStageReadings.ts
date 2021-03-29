import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("sample_method_stage_readings")
@Index("IX_sample_method_stage_readings_sample_method_stage_id", ["sampleMethodStageId"])
export default class SampleMethodStageReadings extends EntityBase {

  

  @Column({ name:'sample_method_stage_id', nullable:false })
  sampleMethodStageId: number;

  @Column({ name:'row', nullable:false })
  row: number;

  @Column({ name:'column', nullable:false })
  column: number;
  
  @Column({ name:'sample_method_stage_column_value' , nullable:true, type:"text" })
  sampleMethodStageColumnValue: string;
  

  
}