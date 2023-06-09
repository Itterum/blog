import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Blog {
  @ObjectIdColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;
}
