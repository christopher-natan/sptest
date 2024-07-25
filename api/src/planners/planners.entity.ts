import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';
import { IsNotEmpty } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('planners')
export class PlannersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ApiProperty()
  @IsNotEmpty({ groups: [CREATE, UPDATE] })
  @Column({ nullable: false })
  userId: string;

  @ApiProperty()
  @IsNotEmpty({ groups: [CREATE, UPDATE] })
  @Column({ nullable: false })
  name: string;

  @ApiProperty()
  @Column({ nullable: true })
  description: string;

  @ApiProperty()
  @Column({ nullable: true })
  plannerTypeId: number;

  @ApiProperty()
  @Column({ nullable: true })
  ECSId: number;

  @ApiProperty()
  @Column({ nullable: true })
  funds: number;

  @ApiProperty()
  @Column({ nullable: true })
  alias: number;

  @ApiProperty()
  @Column({ nullable: false })
  sourcesId: number;

  @ApiProperty()
  @Column({ nullable: false })
  runsId: number;

  @ApiProperty()
  @Column({ nullable: false })
  reportsId: number;

  @ApiProperty()
  @Column('json', { nullable: true })
  trigger: { id: string }[];

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  generateId() {
    this.id = uuidv4();
  }
}
