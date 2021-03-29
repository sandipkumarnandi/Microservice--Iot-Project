import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("calibration_templates")
@Index("IX_calibration_templates_instrument_id",["instrumentId"] )
@Index("uq_calibrationtemplates_calibrationtype_instrumentid_tenantid",["calibrationType","instrumentId","tenantId"],{unique:true} )
export default class CalibrationTemplates extends EntityBase {



    @Column({ name: 'tenant_id' ,nullable:false})
    tenantId: number;

    @Column({ name:'calibration_type',nullable:false })
    calibrationType: number;

    @Column({ name: 'calibration_template_name',nullable:true, type:"text" })
    calibrationTemplateName: string;

    @Column({ name: 'c_w_r_format_no',nullable:true,length:"20" })
    cWRFormatNo: string;

    @Column({ name: 's_o_p_ref_no',nullable:true ,length:"20" })
    sOPRefNo: string;

    @Column({ name: 'instrument_id',nullable:false })
    instrumentId: number;

  
   


}