import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import City from './cities';

@Entity('states')
class State {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(type => City, state => State)
  cities: City[];
}

export default State;
