import { Controller, Get, Post, Body, Render } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Vehicle } from '../models/vehicle.entity'

@Controller('vehicles')
export class VehiclesController {
	constructor(
		@InjectRepository(Vehicle)
		private readonly vehicleRepository: Repository<Vehicle>
	) {}

	@Get()
	@Render('vehicles')
	async findAll() {
		const vehicles = await this.vehicleRepository.find()
		return { vehicles }
	}

	@Post()
	@Render('vehicles')
	async create(@Body() vehicleData: Partial<Vehicle>) {
		await this.vehicleRepository.save(vehicleData)
		const vehicles = await this.vehicleRepository.find()
		return { message: 'Veículo cadastrado com sucesso!', vehicles }
	}
}
