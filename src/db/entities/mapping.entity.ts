import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Report } from '../../types';

@Entity({ name: 'mappings' })
export class Mapping extends BaseEntity {
  @ApiProperty({ description: 'Unique ID' })
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({ description: 'User ID' })
  @Column({ type: 'varchar', length: 50 })
  public user: string;

  @ApiProperty({ description: 'MappingType type (e.g ca)' })
  @Column({ type: 'varchar', length: 20 })
  public mapping: string;

  @ApiProperty({ description: 'Report output type: (e.g JSON/XML' })
  @Column({ type: 'enum', enum: Report, default: Report.JSON })
  public report: Report;

  @ApiProperty({ description: 'Mapping type (e.g JSON object)' })
  @Column({ type: 'text' })
  public source: string;

  @ApiProperty({ description: 'Template (e.g EJS)' })
  @Column({ type: 'text' })
  public template: string;

  @ApiProperty({ description: 'Created date' })
  @UpdateDateColumn({ name: 'created_at', select: false })
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
