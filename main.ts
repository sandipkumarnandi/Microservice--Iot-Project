import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

 const fs = require('fs')

async function bootstrap() {
 
  const httpsOptions = {
    key: fs.readFileSync('private.key'),
   cert: fs.readFileSync('certificate.crt'),
   ca: fs.readFileSync('ca_bundle.crt')
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  
    
  });
  
  const options = new DocumentBuilder()
  .setTitle('Iot Device')
  .setDescription('Iot Device API')
  .setVersion('1.0')
  .addTag('IotDevice')
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api', app, document);


await app.listen(443);
}
bootstrap();