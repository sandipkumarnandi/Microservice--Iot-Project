import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("iot_device_instruments")
@Index("IX_iot_device_instruments_iot_device_id", ["iotDeviceId"])
@Index("uq_iotdeviceinstrument_instrumentid_iotdeviceid", ["instrumentId","iotDeviceId"],{unique:true})
export default class IotDeviceInstruments extends EntityBase {



    @Column({ name: 'iot_device_id', nullable: false })
    iotDeviceId: number;

    @Column({ name: 'instrument_id', nullable: false })
    instrumentId: number;

    @Column({ name: 'sequence', nullable: false })
    sequence: number;

    @Column({ name: 'instrument_port_number', nullable: true, type:"text" })
    instrumentPortNumber: string;

    @Column({ name: 'record_date_time', nullable: false, type:"time without time zone" })
    recordDateTime: Date;


}