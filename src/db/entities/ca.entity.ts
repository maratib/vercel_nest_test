import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'cas' })
export class Ca extends BaseEntity {
  @ApiProperty({ description: 'Unique ID of the Ca' })
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({ description: 'Identifier Type (e.g Cusip)' })
  @Column({ type: 'varchar', length: 50, nullable: true })
  public identifierType: string;

  @ApiProperty({ description: 'Identifier (e.g 02079K107)' })
  @Column({ type: 'varchar', length: 50, nullable: true })
  public identifier: string;

  @ApiProperty({ description: 'Corporate Actions Type (e.g CAP)' })
  @Column({ type: 'varchar', length: 50, nullable: true })
  public caType: string;

  @ApiProperty({ description: 'Capital Change Event Type (e.g 21)' })
  @Column({ type: 'varchar', length: 50, nullable: true })
  public eventType: string;

  @ApiProperty({ description: 'Capital Change Event Type Description (e.g Stock split)' })
  @Column({ type: 'varchar', length: 200, nullable: true })
  public eventDesc: string;

  @ApiProperty({ description: 'Actual Adjustment Type (e.g Stock split)' })
  @Column({ type: 'varchar', length: 50, nullable: true })
  public adjType: string;

  @ApiProperty({ description: 'Actual Adjustment Type Description' })
  @Column({ type: 'varchar', length: 200, nullable: true })
  public adjDesc: string;

  @ApiProperty({ description: 'Adjustment Factor (e.g 0.05)' })
  @Column({ type: 'varchar', length: 50, nullable: true })
  public adjFactor: string;

  @ApiProperty({ description: 'Currency Code (e.g USD)' })
  @Column({ type: 'varchar', length: 50, nullable: true })
  public currency: string;

  @ApiProperty({ description: 'Exchange Code (e.g USD)' })
  @Column({ type: 'varchar', length: 50, nullable: true })
  public exchange: string;

  @ApiProperty({ description: 'Effective Date (e.g 2022-07-15' })
  @Column({ type: 'date', nullable: true })
  effectiveDate: Date;

  @ApiProperty({ description: 'Dividend Pay Date (e.g 2022-07-15' })
  @Column({ type: 'date', nullable: true })
  payDate: Date;

  @ApiProperty({ description: 'Dividend Rate (e.g 0.01' })
  @Column({ type: 'varchar', length: 50, nullable: true })
  divRate: string;

  @ApiProperty({ description: 'Nominal Value (e.g )' })
  @Column({ type: 'varchar', length: 50, nullable: true })
  nomValue: string;

  @ApiProperty({ description: 'Nominal Value Currency (e.g USD)' })
  @Column({ type: 'char', length: 50, nullable: true })
  nomCurrency: string;

  @ApiProperty({ description: 'Nominal Value Date (e.g 2022-07-15' })
  @Column({ type: 'date', nullable: true })
  nomDate: Date;

  @ApiProperty({ description: 'Created date' })
  @CreateDateColumn({ name: 'created_at', select: false })
  createdAt: Date;

  @ApiProperty({ description: 'Updated date' })
  @UpdateDateColumn({ name: 'updated_at', select: false })
  updatedAt: Date;

  // @BeforeInsert()
  // async setPassword(password: string) {
  //   console.log('In Before Insert');

  //   const salt = await bcrypt.genSalt();
  //   this.password = await bcrypt.hash(password || this.password, salt);
  // }
}
