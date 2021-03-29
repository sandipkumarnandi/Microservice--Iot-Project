import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne,JoinColumn, Index } from 'typeorm';

@Entity("sensor_data")
@Index("IX_sensor_data_iot_device_sensor_id", ["iotDeviceSensorId"])
export default class SensorData extends EntityBase {


  @Column({ name:'sensor_data_value', type:"double precision", nullable:false })
  sensorDataValue: number;

  @Column({ name:'sensor_additional_data', type:'json', nullable:true })
  sensorAdditionalData: string;

  @Column({ name:'threshold_value',type:"double precision", nullable:false })
  isOptimum: number;

  @Column({ name:'reference_value',type:"double precision", nullable:false })
  referenceValue: number;

  @Column({ name: 'is_critical', nullable:false })
  isCritical: boolean;

  @Column({ name: 'recording_date_time', type:"timestamp with time zone", nullable:false })
  recordingDateTime: Date;

  @Column({ name: 'iot_device_sensor_id', nullable:false, default:0 })
  iotDeviceSensorId: number;

}