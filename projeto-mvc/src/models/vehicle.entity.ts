import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('vehicles')
export class Vehicle {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ unique: true })
	placa: string

	@Column()
	nome: string
}
