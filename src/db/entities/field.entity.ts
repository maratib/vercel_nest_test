import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'fields' })
export class Field extends BaseEntity {
  @ApiProperty({ description: 'Unique ID' })
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({ description: 'Field name (e.g caType)' })
  @Column({ type: 'varchar', unique: true, length: 50 })
  public name: string;

  @ApiProperty({ description: 'Field description (e.g Corporate Actions Type)' })
  @Column({ type: 'varchar', length: 256 })
  public desc: string;

  @ApiProperty({ description: 'Field type (e.g ca)' })
  @Column({ type: 'varchar', length: 20 })
  public fieldType: string;

  @ApiProperty({ description: 'Field Format (e.g string)' })
  @Column({ type: 'varchar', length: 10, default: 'string' })
  public fieldFormat: string = 'string';
}
