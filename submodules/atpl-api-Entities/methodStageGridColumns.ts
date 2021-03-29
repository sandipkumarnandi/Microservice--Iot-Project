import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("method_stage_grid_columns")
@Index("uq_methodstagegridcolumns_methodstageid_columnname", ["methodStageId"],{unique:true})
export default class MethodStageGridColumnss extends EntityBase {

  

  @Column({ name:'method_stage_id', nullable:false })
  methodStageId: number;

  @Column({ name:'column_name', type:"text" , nullable:true })
  columnName: number;

  @Column({ name:'is_input' , nullable:false })
  isInput: boolean;

  @Column({ name:'is_repeat' , nullable:false })
  isRepeat: boolean;

  @Column({ name:'is_text' , nullable:false })
  isText: boolean;

  @Column({ name:'is_running_number' , nullable:false })
  isRunningNumber: boolean;

  @Column({ name:'start_column_pattern' , nullable:true, type:"text" })
  startColumnPattern: string;

  @Column({ name:'formulae' , nullable:true, type:"text" })
  formulae: string;

  @Column({ name:'sequence', nullable:false })
  sequence: number;

 

  

  
}