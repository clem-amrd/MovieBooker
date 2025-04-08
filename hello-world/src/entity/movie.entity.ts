import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {

  @Column()
  adult: boolean;

  @Column()
  backdrop_path: string;

  @Column()
  genre_ids: number[];

  @Column()
  id: number;

  @Column()
  original_language: string;

  @Column()
  original_title: number[];

  @Column()
  overview: string;

  @Column()
  popularity: number;

  @Column()
  poster_path: string;

  @Column()
  release_date: string;

  @Column()
  title: string;

  @Column()
  video: boolean;

  @Column()
  vote_average: number;

  @Column()
  vote_count: number;
}