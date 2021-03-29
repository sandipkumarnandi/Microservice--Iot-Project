import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("instrument_calibration_sets")
@Index("IX_instrument_calibration_sets_calibration_template_id", ["calibrationTemplateId"])
@Index("IX_instrument_calibration_sets_instrument_id", ["instrumentId"])
@Index("uq_ics_caltype_caltempid_tenid_instrumentid_st_end_date", ["calibrationType","calibrationTemplateId","tenantId","instrumentId","calibrationStartDateNTime","calibrationEndDateNTime"],{unique:true})
export default class InstrumentCalibrationSets extends EntityBase {



    @Column({ name: 'tenant_id', nullable: false })
    tenantId: number;

    @Column({ name: 'instrument_id', nullable: false })
    instrumentId: number;

    @Column({ name: 'calibration_type', nullable: false })
    calibrationType: number;

    @Column({ name: 'calibration_template_id', nullable: false })
    calibrationTemplateId: number;

    @Column({ name: 'c_w_r_no', nullable: true, length:"20" })
    cWRNo: string;

    @Column({ name: 'c_w_r_issue_no', nullable: true, length: "20" })
    cWRIssueNo: string;

    @Column({ name: 's_o_p_ref_no', nullable: true, length: "20" })
    sOPRefNo: string;

    @Column({ name: 'box_no', nullable: true, length: "20" })
    boxNo: string;

    @Column({ name: 'valid_upto', nullable: false, type:"timestamp without time zone"})
    validUpto : Date;

    @Column({ name: 'calibration_start_date_n_time', nullable: false, type:"timestamp without time zone" })
    calibrationStartDateNTime: Date;

    @Column({ name: 'calibration_end_date_n_time', nullable: false, type:"timestamp without time zone"})
    calibrationEndDateNTime: Date;

    @Column({ name: 'issued_on', nullable: false , type:"timestamp without time zone" })
    issuedOn: Date;
    
    @Column({ name: 'correlation_coefficient', nullable: true , type:"text" })
    correlationCoefficient: string;

    @Column({ name: 'calibration_certificate_no', nullable: true , length:"100" })
    calibrationCertificateNo: string;

    @Column({ name: 'conclusion', nullable: true , length:"255" })
    conclusion: string;
    
    @Column({ name: 'reference_specification', nullable: true , length:"150" })
    referenceSpecification: string;

    @Column({ name: 'traceable_to', nullable: true , length:"100" })
    traceableTo: string;

    @Column({ name: 'remarks', nullable: true , length:"1000" })
    remarks: string;

    @Column({ name: 'stage', nullable: true , type:"text" })
    stage: string;

    @Column({ name: ' checked_by', nullable: false })
    checkedBy: number;

    @Column({ name: 'approved_by', nullable: false })
    approvedBy: number;

    @Column({ name: 'authorized_by', nullable: false })
    authorizedBy: number;

    @Column({ name: 'issued_by', nullable: false })
    issuedBy: number;

    @Column({ name: 'checked_on', nullable: true , type:"timestamp without time zone" })
    checkedOn: Date;

    @Column({ name: 'approved_on', nullable: true , type:"timestamp without time zone" })
    approvedOn: Date;

    @Column({ name: 'authorized_on', nullable: true , type:"timestamp without time zone" })
    authorizedOn: Date;



}