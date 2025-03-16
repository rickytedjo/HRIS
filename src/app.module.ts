import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { PaymentModule } from './modules/payment/payment.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { SalaryModule } from './modules/salary/salary.module';
import { LetterModule } from './modules/letter/letter.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load:[configuration],
      isGlobal:true}),
    PrismaModule,
    UserModule,
    PaymentModule,
    EmployeeModule,
    SalaryModule,
    LetterModule
  ],

export class AppModule {}
