import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: true,
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Authorization', 'Content-Type']
  })
  const port = process.env.PORT || 3001
  await app.listen(port , () => {console.log(`Server start on port ${port}`)})
}
bootstrap();
