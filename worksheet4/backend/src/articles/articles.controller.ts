import { Controller, Get, Post, Body } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './schemas/article.schema';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  async getAll(): Promise<Article[]> {
    return this.articlesService.findAll();
  }

  @Post()
  async create(@Body() article: Article): Promise<Article> {
    return this.articlesService.create(article);
  }
}