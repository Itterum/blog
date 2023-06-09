import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Blog } from './blog.entity/blog.entity';
import { BlogService } from './blog.service';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async findAll(): Promise<Blog[]> {
    return this.blogService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Blog> {
    return this.blogService.findById(id);
  }

  @Post()
  async create(@Body() blog: Blog): Promise<Blog> {
    return this.blogService.create(blog);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    this.blogService.delete(id);
  }
}
