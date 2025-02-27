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
		return { vehicles, message: null } 
	}

	@Post()
	@Render('vehicles')
	async create(@Body() vehicleData: Partial<Vehicle>) {
		if (!this.validatePlate(vehicleData.placa)) {
			const vehicles = await this.vehicleRepository.find()
			return { message: '❌ Placa inválida! Use o formato ABC-1234 ou ABC1D23.', vehicles }
		}

		await this.vehicleRepository.save(vehicleData)
		const vehicles = await this.vehicleRepository.find()
		return { message: '✅ Veículo cadastrado com sucesso!', vehicles }
	}

	private validatePlate(plate: string): boolean {
		const regexAntiga = /^[A-Z]{3}-\d{4}$/  
		const regexMercosul = /^[A-Z]{3}\d[A-Z]\d{2}$/ 

		return regexAntiga.test(plate) || regexMercosul.test(plate)
	}
}
