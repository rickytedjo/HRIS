import {
  IsAlpha,
  IsBoolean,
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  IsUUID,
} from '@nestjs/class-validator';
import { workscheme } from './workscheme.enum';
import { educationtype } from './educationtype.enum';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { contracttype } from './contracttype.enum';
import { BankCode } from './bankcode.enum';
import { Transform } from 'class-transformer';

export class createEmployeeDto {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty( { message: 'company_id must be fille' })
  company_id: string;

  @ApiProperty()
  @IsEnum(workscheme)
  @IsNotEmpty( { message: 'workscheme must be filled' })
  workscheme: workscheme;

  @ApiProperty()
  @IsString()
  @IsNotEmpty( { message: 'first name must be filled'})
  first_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty( { message: 'last name must be filled'})
  last_name: string;

  @ApiPropertyOptional()
  @IsAlpha()
  @IsOptional()
  gender: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  address: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiPropertyOptional()
  @IsNumberString()
  @IsNotEmpty()
  phone: string;

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  is_admin: boolean;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty({message: 'attendance_id must be filled'})
  attendance_id: string;

  @ApiPropertyOptional()
  @IsDate()
  @IsOptional()
  @Transform(({ value }) => new Date(value))
  birth_date: Date;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  birth_place: string;

  @ApiPropertyOptional()
  @IsNumberString()
  @IsOptional()
  nik: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  position: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  branch: string;

  @ApiPropertyOptional()
  @IsEnum(contracttype)
  @IsOptional()
  contract: contracttype;

  @ApiPropertyOptional()
  @IsEnum(educationtype, { message: '' })
  @IsOptional()
  last_education: educationtype;

  @ApiPropertyOptional({
    example: {
      /*
            enum BankCode {
            BRI       // 002
            Mandiri   // 008
            BNI       // 009
            Danamon   // 011
            Permata   // 013
            BCA       // 014
            Maybank   // 016
            Panin     // 019
            Bukopin   // 020
            CIMB      // 022
            UOB       // 023
            OCBC      // 028
            BJB       // 110
            Muamalat  // 147
            BTN       // 200
            BTPN      // 213
            Mega      // 426
            SyariahMandiri // 451
            Commonwealth   // 950
            }
            */
    },
  })
  @IsEnum(BankCode)
  @IsOptional()
  account_bank: string;

  @ApiPropertyOptional()
  @IsNumberString()
  @IsOptional()
  account_number: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  account_name: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  google_id: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  access_token: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  refresh_token: string;
}
