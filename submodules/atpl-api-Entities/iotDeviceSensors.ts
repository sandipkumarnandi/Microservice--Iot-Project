import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("iot_device_sensors")
@Index("IX_iot_device_sensors_iot_device_id", ["iotDeviceId"])
@Index("uq_iotdevicesensors_sensorid_iotdeviceid", ["sensorId","iotDeviceId"],{unique:true})
export default class IotDeviceSensors extends EntityBase {

  

  @Column({ name:'iot_device_id', nullable:false })
  iotDeviceId: number;

  @Column({ name:'sensor_id', nullable:false })
  sensorId: number;

  @Column({ name:'iot_device_sensor_connection_port', type:"text" , nullable:true })
  iotDeviceSensorConnectionPort: string;

  @Column({ name: 'run_interval_in_minutes' , nullable:false})
  runIntervalInMinutes: number;

  @Column({ name: 'notification_conditions' ,type:'json'})
  notificationConditions: string;

  
}