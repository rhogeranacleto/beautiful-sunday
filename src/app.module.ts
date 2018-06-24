import { Module } from '@nestjs/common';
import { AirportModule } from './airport/airport.module';

@Module({
	imports: [AirportModule]
})
export class ApplicationModule { };