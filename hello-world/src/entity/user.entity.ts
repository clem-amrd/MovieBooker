import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// import { UserRepository } from '../repository/user.repository'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  // [EntityRepositoryType]?: UserRepository;
}