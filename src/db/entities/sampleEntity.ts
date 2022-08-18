import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'TableName' })
export class Ca extends BaseEntity {
  @ApiProperty({ description: 'Unique ID' })
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({ description: 'Identifier Type (e.g Cusip)' })
  @Column({ type: 'varchar', length: 20 })
  public identifierType: string;





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
