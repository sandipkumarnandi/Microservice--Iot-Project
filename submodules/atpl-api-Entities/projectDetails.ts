import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("project_details")
@Index("IX_project_details_io_t_device_id", ["iotDeviceId"])
@Index("IX_project_details_project_id", ["projectId"])
export default class ProjectDetails extends EntityBase {

  

  @Column({ name:'project_id', nullable:false })
  projectId: number;

  @Column({ name:'energy_resource_type' , nullable:false })
  energyResourceType: number;

  @Column({ name:'project_details', type:"json" , nullable:true })
  projectDetails: string;

  @Column({ name:'description', type:"text" , nullable:true })
  description: string;

  @Column({ name:'installed_capacity', type:"double precision" , nullable:false })
  installedCapacity: number;

  @Column({ name:'commissioned_date', type:"timestamp with time zone" , nullable:false })
  commissionedDate: Date;

  @Column({ name:'is_active' , nullable:false })
  isActive: boolean;

  @Column({ name:'iot_device_id' , nullable:false })
  iotDeviceId: number;
  

  
}