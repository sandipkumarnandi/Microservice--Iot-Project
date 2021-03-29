import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("balance_record_details")
@Index("IX_balance_record_details_balance_record_id",["balanceRecordId"] )
export default class BalanceRecordDetails extends EntityBase {



    @Column({ name: 'auto_off_set' ,nullable:true})
    autoOffSet: number;

    @Column({ name:'balance_record_id',nullable:false })
    balanceRecordId: number;

    @Column({ name: 'a_r_num',nullable:true })
    aRNum: string;

    @Column({ name: 'compound_name',nullable:true })
    compoundName: string;

    @Column({ name: 'parameter_name',nullable:true })
    parameterName: string;

    @Column({ name: 'no_of_weighings',nullable:false })
    noOfWeighings: number;

   


}