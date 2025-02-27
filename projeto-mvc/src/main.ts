import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DatabaseService } from './shared/database/database.service'
import { ValidationPipe } from '@nestjs/common'
import { join } from 'path'
import { NestExpressApplication } from '@nestjs/platform-express'
import * as hbs from 'hbs'

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule)

	app.setBaseViewsDir(join(__dirname, '..', 'src', 'views'))

	app.setViewEngine('hbs')

	hbs.registerHelper('includes', (text: string, search: string) => text.includes(search))
	
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
			forbidUnknownValues: true,
			transform: true
		})
	)
	app.enableCors()

	const databaseService = app.get(DatabaseService)
	await databaseService.synchronizeAndRunMigrations()

	await app.listen(process.env.PORT || 3001)
}
bootstrap()
