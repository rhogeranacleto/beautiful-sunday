import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './src/app.module';
import { createConnection } from 'typeorm';

async function bootstrap() {

	await createConnection({
		type: 'mongodb',
		url: 'mongodb://root1234:root1234@ds261570.mlab.com:61570/beautiful-sunday',
		logging: true,
		entities: [
			'./src/**/*.entity.{ts,js}'
		]
	});

	const app = await NestFactory.create(ApplicationModule);
	await app.listen(3000);
}

bootstrap();