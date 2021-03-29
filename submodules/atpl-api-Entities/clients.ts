import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("clients")
@Index("IX_drafts_client_address_id", ["clientAddressId"])
export default class Clients extends EntityBase {

  

  @Column({ name:'tenant_id' , nullable:false})
  tenantId: number;

  @Column({ name:'client_name', nullable:true,type:"text" })
  clientName: string;

  @Column({ name:'client_address_id', nullable:false })
  clientAddressId: number;

  @Column({ name: 'client_details',type:"text" , nullable:true })
  clientDetails: string;

  @Column({ name: 'subscription_start_date' ,type:'time with time zone', nullable:false})
  subscriptionStartDate: Date;

  @Column({ name: 'is_active' , nullable:false})
  isActive: boolean;
  
  @Column({ name: 'client_user_id' , nullable:false, default:0})
  clientUserId: number;

  
}