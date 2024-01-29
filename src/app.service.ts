import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  getHealth(): string {
    const apiKey = this.configService.apiKey;
    const db = this.configService.database.name;

    return `The service is up and running. ApiKey ${this.apiKey}, ${apiKey}, ${db}`;
  }
}
