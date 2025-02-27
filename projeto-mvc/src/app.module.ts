import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseConfig } from './shared/database/database.config'
import { DatabaseService } from './shared/database/database.service'
import { VehiclesController } from './controllers/vehicles.controller'
import { Vehicle } from './models/vehicle.entity'

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forFeature([Vehicle]),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) =>
				DatabaseConfig.createTypeOrmOptions(configService),
			inject: [ConfigService]
		})
	],
	controllers: [VehiclesController],
	providers: [DatabaseService]
})
export class AppModule {}
