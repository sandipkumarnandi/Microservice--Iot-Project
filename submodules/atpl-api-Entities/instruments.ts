import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("instruments")
@Index("IX_instruments_instrument_category_id", ["instrumentCategoryId"])
@Index("uq_instruments_instrumentname_tenantid", ["tenantId","instrumentName"],{unique:true})
export default class Instruments extends EntityBase {



    @Column({ name: 'tenant_id', nullable: false })
    tenantId: number;

    @Column({ name: 'instrument_name', nullable: true, length:"150" })
    instrumentName: string;

    @Column({ name: 'measuring_unit', nullable: false })
    measuringUnit: number;

    @Column({ name: 'min_value', nullable: false, type:"double precision" })
    minValue: number;

    @Column({ name: 'max_value', nullable: false, type:"double precision" })
    maxValue: number;

    @Column({ name: 'serial_no', nullable: true, length:"100" })
    serialNo: string;

    @Column({ name: 'version_no', nullable: true, type:"text" })
    versionNo: string;

    @Column({ name: 'internal_id', nullable: true, length:"100" })
    internalId: string;

    @Column({ name: 'instrument_category_id', nullable: false })
    instrumentCategoryId: number;

    @Column({ name: 'com_parameter_device_in_json', nullable: true, type:"json" })
    comParameterDeviceInJson: number;

    @Column({ name: 'iot_hub_name', nullable: true, type:"text" })
    iotHubName: string;

    @Column({ name: 'shared_access_key_name', nullable: true, type:"text" })
    sharedAccessKeyName: string;

    @Column({ name: 'shared_access_key', nullable: true, type:"text" })
    sharedAccessKey: string;


}