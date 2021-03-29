import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne , JoinColumn, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("stages")

export default class Stages extends EntityBase {


  @Column({ name: 'sensor_data', type:"json", nullable:true})
  sensorData: number;

  

  
}