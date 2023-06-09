import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './blog.entity/blog.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
  ) {}

  async findAll(): Promise<Blog[]> {
    return this.blogRepository.find();
  }

  async findById(id: string): Promise<Blog> {
    return this.blogRepository.findOne({ where: { id: id } });
  }

  async create(blog: Blog): Promise<Blog> {
    return this.blogRepository.save(blog);
  }

  async update(blog: Blog): Promise<Blog> {
    return this.blogRepository.save(blog);
  }

  async delete(id: string): Promise<void> {
    await this.blogRepository.delete(id);
  }
}
