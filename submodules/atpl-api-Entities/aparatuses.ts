import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("aparatuses")
@Index("uq_aparatuses_aparatustype_aparatusname_tenantid",["tenantId", "aparatusType", "aparatusName"], { unique: true })
export default class Aparatuses extends EntityBase {



    @Column({ name: 'tenant_id' ,nullable:false})
    tenantId: number;

    @Column({ name: 'aparatus_type',nullable:false })
    aparatusType: number;

    @Column({ name: 'aparatus_name',nullable:true })
    aparatusName: string;

    @Column({ name: 'aparatus_code',nullable:true })
    aparatusCode: string;

   


}