import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("balance_record_detail_weighs")
@Index("IX_balance_record_detail_weighs_balance_record_detail_id",["balanceRecordDetailId"] )
export default class BalanceRecordDetailWeighs extends EntityBase {



    @Column({ name: 'auto_off_set' ,nullable:true})
    autoOffSet: number;

    @Column({ name:'balance_record_detail_id',nullable:false })
    balanceRecordDetailId: number;

    @Column({ name: 'weigh_date_n_time',nullable:false ,type:"time without time zone"})
    WeightDateNTime: Date;

    @Column({ name: 'weight_value',nullable:false,  type:"real"  })
    weightValue: number;

    @Column({ name: 'unit',nullable:true })
    unit: string;

   


}