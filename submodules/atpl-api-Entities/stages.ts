import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne , JoinColumn, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("stages")
@Index("uq_stages_stagename_tenantid", ["stageName","tenantId"],{unique:true})
export default class Stages extends EntityBase {


  @Column({ name: 'tenant_id',  nullable:false})
  tenantId: number;

  @Column({ name:'stage_name', type:"text", nullable:true })
  stageName: string;

  @Column({ name: 'stage_description', type:'text', nullable:true })
  stageDescription: string;

  @Column({ name: 'is_complete' ,nullable:false})
  isComplete: boolean;
 
 

  
}