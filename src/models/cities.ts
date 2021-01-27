import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Denunciation from './denunciation';
import State from './states';
import UserCreate from './usersCreate';

@Entity('cities')
class City {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  state_id: string;

  @ManyToOne(type => State, cities => City)
  @JoinColumn({ name: 'state_id' })
  state: State;

  @OneToMany(type => Denunciation, city => City)
  denunciations: Denunciation[];

  @OneToMany(type => Denunciation, city => City)
  usersCreate: UserCreate[];
}

export default City;
