import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("instrument_categories")
@Index("uq_instrumentcategories_categoryname_tenantid", ["tenantId","categoryName"],{unique:true})
export default class InstrumentCategories extends EntityBase {



    @Column({ name: 'tenant_id', nullable: false })
    tenantId: number;

    @Column({ name: 'category_name', nullable: true, type:"text" })
    categoryName: string;

    @Column({ name: 'description', nullable: true, type:"text" })
    description: string;

}