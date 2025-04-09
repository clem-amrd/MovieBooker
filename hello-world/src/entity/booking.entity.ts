import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movie: number;

  @Column()
  schedule: Date;

  @ManyToMany(() => User, user => user.id)
  @JoinColumn({ name: 'id' })
  user_id: number;

}