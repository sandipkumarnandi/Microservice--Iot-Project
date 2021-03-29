import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("instrument_calibration_set_details")
@Index("IX_instrument_calibration_set_details_calibration_template_sec~", ["calibrationTemplateSectionDetailId"])
@Index("IX_instrument_calibration_set_details_calibration_template_se~1", ["calibrationTemplateSectionId"])
@Index("IX_instrument_calibration_set_details_instrument_calibration_s~", ["instrumentCalibrationSetId"])
export default class InstrumentCalibrationSetDetails extends EntityBase {



    @Column({ name: 'serial_no', nullable: false })
    serialNo: number;

    @Column({ name: 'predefined_weight', nullable: false, type: "real" })
    predefinedWeight: number;

    @Column({ name: 'observed_weight', nullable: false, type: "real" })
    observedWeight: number;

    @Column({ name: 'acceptance_criteria', nullable: true, length:"20" })
    acceptanceCriteria: string;

    @Column({ name: 'conclusion', nullable: true, length:"50" })
    conclusion: string;

    @Column({ name: 'correlation_coefficient', nullable: true, length: "20" })
    correlationCoefficient: string;

    @Column({ name: 'calibration_template_section_id', nullable: false })
    calibrationTemplateSectionId: number;

    @Column({ name: 'calibration_template_section_detail_id', nullable: false})
    calibrationTemplateSectionDetailId: number;

    @Column({ name: 'instrument_calibration_set_id', nullable: false })
    instrumentCalibrationSetId: number;



}