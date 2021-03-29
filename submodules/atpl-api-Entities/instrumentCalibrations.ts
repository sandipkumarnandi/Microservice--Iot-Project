import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';
import { EntityBase } from "../atpl-api-Framework/submodules/common/EntityBase";

@Entity("instrument_calibrations")
@Index("IX_instrument_calibrations_instrument_id", ["instrumentId"])
export default class InstrumentCalibrations extends EntityBase {

  

  @Column({ name:'instrument_id' , nullable:false})
  instrumentId: number;

  @Column({ name:'calibration_data', nullable:true, type:"text"})
  calibrationData: string;

  @Column({ name:'calibration_date_time', nullable:false, type:"time without time zone"})
  calibrationDateTime: Date;


  
}