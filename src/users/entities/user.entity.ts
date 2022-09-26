import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from '../../common/entities/common.entity';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Matches,
} from 'class-validator';
import { Exclude } from 'class-transformer';

@Entity()
export class UserEntity extends CommonEntity {
  @IsEmail({}, { message: '올바른 이메일을 작성해주세요' })
  @IsNotEmpty()
  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Column({ type: 'varchar', nullable: false })
  username: string;

  @Exclude()
  @Column({ type: 'varchar', nullable: false })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too weak',
  })
  password: string;

  @IsPhoneNumber('KR')
  @Column({ type: 'int', nullable: false })
  tel: number;

  @IsString()
  @Column({ type: 'varchar', nullable: false })
  address: string;

  @IsBoolean()
  @Column({ type: 'boolean', default: false })
  isAdmin: boolean;
}
