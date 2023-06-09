import { Module } from '@nestjs/common';
import { BlogService } from '../blog/blog.service';
import { BlogController } from '../blog/blog.controller';
import { BlogRepository } from '../blog/blog.repository/blog.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blog.entity/blog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Blog])],
  controllers: [BlogController],
  providers: [BlogService, BlogRepository],
  exports: [BlogRepository],
})
export class BlogModule {}
