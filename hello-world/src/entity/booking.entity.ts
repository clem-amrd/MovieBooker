import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movie: number;

  @Column()
  schedule: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user_id: number;

}