import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("samples")
@Index("uq_samples_samplecode_samplename_tenantid", ["sampleCode","sampleName","tenantId"],{unique:true})
export default class Samples extends EntityBase {


  @Column({ name:'tenant_id', nullable:false })
  tenantId: number;

  @Column({ name:'sample_code', nullable:true, length:"50" })
  sampleCode: string;

  @Column({ name:'sample_name', nullable:true, length:"50" })
  sampleName: string;

  @Column({ name:'internal_id', nullable:true, length:"50" })
  internalId: string;

  @Column({ name:'customer_code', nullable:true, type:"text" })
  customerCode: number;

  @Column({ name:'customer_name', nullable:true, type:"text" })
  customerName: number;

  @Column({ name:'sample_comments', nullable:true, type:"text" })
  sampleComments: number;
  

  
}