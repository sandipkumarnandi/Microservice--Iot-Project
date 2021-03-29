import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("calibration_template_section_details")
@Index("IX_calibration_template_section_details_calibration_template_s~", ["calibrationTemplateSectionId"])
export default class CalibrationTemplateSectionDetails extends EntityBase {



    @Column({ name: 'calibration_template_section_id', nullable: false })
    calibrationTemplateSectionId: number;

    @Column({ name: 'predefined_weight', nullable: false, type: "real" })
    predefined_weight: number;

    @Column({ name: 'acceptance_criteria', nullable: true, type: "text" })
    acceptanceCriteria: string;

    @Column({ name: 'standard_calibration_weight', nullable: true, type: "real" })
    standardCalibrationWeight: number;

    @Column({ name: 'correlation_coefficient', nullable: true, length: "20" })
    correlationCoefficient: string;

    @Column({ name: 'unit', nullable: true, type: "text" })
    unit: string;





}