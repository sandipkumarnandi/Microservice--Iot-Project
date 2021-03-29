import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("internal_calibrations")
@Index("IX_internal_calibrations_instrument_id", ["instrumentId"])
export default class InternalCalibrations extends EntityBase {



    @Column({ name: 'tenant_id', nullable: false })
    tenantId: number;

    @Column({ name: 'reported_by_id', nullable: false })
    reportedById: number;

    @Column({ name: 'instrument_id', nullable: false })
    instrumentId: number;

    @Column({ name: 'instrument_value', nullable: true, type:"text" })
    instrumentValue: string;

    @Column({ name: 'record_date_time', nullable: false, type:"time without time zone" })
    recordDateTime: Date;


}