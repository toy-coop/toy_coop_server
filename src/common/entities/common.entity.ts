import { IsUUID } from 'class-validator';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

export abstract class CommonEntity {
  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    type: 'datetime',
  })
  createAt: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updateAt: Date;

  @Exclude()
  @DeleteDateColumn()
  deleteAt: Date | null;
}
