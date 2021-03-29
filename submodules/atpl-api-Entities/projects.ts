import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("projects")
@Index("IX_projects_client_id", ["clientId"])
export default class Projects extends EntityBase {

  

  @Column({ name:'client_id', nullable:false })
  clientId: number;

  @Column({ name:'project_name' , nullable:true, type:"text" })
  projectName: string;

  @Column({ name:'latitude', type:"double precision" , nullable:false })
  latitude: number;

  @Column({ name:'longitude', type:"double precision" , nullable:false })
  longitude: number;

  @Column({ name:'is_active' , nullable:false })
  isActive: boolean;

  @Column({ name:'start_date' , nullable:false , type:"timestamp with time zone"})
  startDate: Date;

  @Column({ name:'host_environment_id' , nullable:false , default:0})
  hostEnvironmentId: number;
  

  
}