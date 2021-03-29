import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("drafts")

export default class Drafts extends EntityBase {

  

  @Column({ name:'tenant_id' , nullable:false})
  tenantId: number;

  @Column({ name:'entity_id', nullable:false})
  entityId: number;

  @Column({ name:'unique_key_combination', nullable:true, length:"200"})
  uniqueKeyCombination: string;

  @Column({ name: 'user_id', nullable:false })
  userId: number;

  @Column({ name: 'json_data' ,type:'json', nullable:false})
  jsonData: string;

  @Column({ name: 'object_type' , nullable:true, type:"text"})
  objectType: string;
  
  @Column({ name: 'draft_entry_date_time' ,  type:"time without time zone"})
  draftEntryDateTime: Date;

  
}