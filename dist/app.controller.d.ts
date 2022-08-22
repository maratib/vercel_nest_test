import { AppService } from './app.service';
import { PostDto } from './utils/dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getAll(): string;
    create(dto: PostDto): string;
}
