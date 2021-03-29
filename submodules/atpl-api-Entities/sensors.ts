import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne , JoinColumn, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("sensors")
@Index("uq_sensors_sensorcode", ["sensorCode"],{unique:true})
export default class Sensors extends EntityBase {


  @Column({ name: 'sensor_code', length:"150", nullable:true})
  sensorCode: string;

  @Column({ name:'description', length:"500", nullable:true })
  description: string;

  @Column({ name: 'measuring_unit' ,nullable:false})
  measuringUnit: number;
 
 

  
}