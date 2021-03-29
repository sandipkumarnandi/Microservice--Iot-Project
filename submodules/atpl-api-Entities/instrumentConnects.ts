import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("instrument_connects")
@Index("uq_instrumentconnect_instrumentname_tenantid_iotdeviceid", ["tenantId","instrumentId","iotDeviceId"],{unique:true})
export default class InstrumentConnects extends EntityBase {



    @Column({ name: 'tenant_id', nullable: false })
    tenantId: number;

    @Column({ name: 'instrument_id', nullable: false })
    instrumentId: number;

    @Column({ name: 'instrument_name', nullable: true, length:"150" })
    instrumentName: string;

    @Column({ name: 'connection_status', nullable: true, type:"text" })
    connectionStatus: string;

    @Column({ name: 'iot_device_id', nullable: false })
    iotDeviceId: number;

    @Column({ name: 'instrument_value', nullable: true, type:"text" })
    instrumentValue: string;

    @Column({ name: 'record_date_time', nullable: false , type:"timestamp without time zone" })
    recordDateTime: Date;

}