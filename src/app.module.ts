import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './item.entity';
import { ItemsService } from './items.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // MariaDB ist kompatibel mit MySQL-Treiber
      host: 'db5012701419.hosting-data.io', // Ihr Hostname
      port: 3306, // Standardport für MySQL/MariaDB
      username: 'dbu922759', // Ihr Benutzername
      password: 'SHOdan#2010', // Ihr Passwort
      database: 'dbs10670567', // Ihr Datenbankname
      entities: [Item], // Ihre Entities
      synchronize: false, // Vorsicht im Produktionsbetrieb
    }),
    TypeOrmModule.forFeature([Item])
    // andere Module
  ],
  controllers: [AppController],
  providers: [ItemsService],
})
export class AppModule {}
