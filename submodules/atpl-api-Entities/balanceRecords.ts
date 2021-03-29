import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("balance_records")
@Index("IX_balance_records_instrument_id",["instrumentId"] )
export default class BalanceRecords extends EntityBase {



    @Column({ name: 'tenant_id' ,nullable:false})
    tenantId: number;

    @Column({ name:'date_n_time_of_recording',nullable:false, type:"time without time zone" })
    dateNTimeOfRecording: Date;

    @Column({ name: 'instrument_id',nullable:false })
    instrumentId: number;

    @Column({ name: 'verfied_by',nullable:false })
    verifiedBy: number;

    @Column({ name: 'stage',nullable:false })
    stage: number;

    @Column({ name: 'verification_status',nullable:false })
    verificationStatus: boolean;

    @Column({ name: 'verfication_date',nullable:false , type:"time with time zone"})
    verficationDate: Date;

   


}