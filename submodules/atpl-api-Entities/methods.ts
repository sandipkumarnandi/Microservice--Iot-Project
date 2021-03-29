import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("methods")
@Index("uq_methods_methodcode_tenantid", ["methodCode","tenantId"],{unique:true})
export default class Methods extends EntityBase {

  

  @Column({ name:'tenant_id', nullable:false })
  tenantId: number;

  @Column({ name:'method_code', type:"text" , nullable:true })
  methodCode: string;

  @Column({ name:'method_name', type:"text" , nullable:true })
  methodName: string;

  @Column({ name:'method_description', type:"text" , nullable:true })
  methodDescription: string;

  

  
}