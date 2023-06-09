import { BlogRepository } from './blog.repository';

describe('BlogRepository', () => {
  it('should be defined', () => {
    expect(new BlogRepository()).toBeDefined();
  });
});
