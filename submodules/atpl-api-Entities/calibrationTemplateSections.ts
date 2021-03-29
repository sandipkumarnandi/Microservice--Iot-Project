import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("calibration_template_sections")
@Index("uq_calibrationtemplatesections_calibrationtemplateid_sectionnam", ["calibrationTemplateId","sectionName","sectionType"],{unique:true})
export default class CalibrationTemplateSections extends EntityBase {



    @Column({ name: 'calibration_template_id', nullable: false })
    calibrationTemplateId: number;

    @Column({ name: 'section_name', nullable: true, length: "20" })
    sectionName: string;

    @Column({ name: 'section_description', nullable: true, length: "255" })
    sectionDescription: string;

    @Column({ name: 'section_type', nullable: false })
    sectionType: number;

    @Column({ name: 'no_of_measurements_or_positions', nullable: false })
    noOfMeasurementsOrPositions: number;

    @Column({ name: 'unit', nullable: true, type: "text" })
    unit: string;





}