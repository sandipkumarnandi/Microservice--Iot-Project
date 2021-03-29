import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";
@Entity("iot_devices")
@Index("IX_iot_devices_client_id", ["clientId"])
@Index("uq_iotdevices_iotdevicename_tenantid", ["iotDeviceName","tenantId"],{unique:true})
export default class IotDevices extends EntityBase {

  @Column({ name:'tenant_id' })
  tenantId: number;

  @Column({ name:'iot_device_name' , length:"150", nullable:true })
  iotDeviceName: string;

  @Column({ name:'description',length:"500", nullable:true  })
  description: string;
  
  @Column({ name: 'is_active' , nullable:false})
  isActive: boolean;

  @Column({ name: 'iot_device_guid' , nullable:false, type:"uuid"})
  iotDeviceGuid: string;

  @Column({ name:'iot_device_connection_port', type:'text', nullable:true })
  iotDeviceConnectionPort: string;

  @Column({ name: 'client_id', nullable:false })
  clientId: number;

}