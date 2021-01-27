import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import City from './cities';

@Entity('denunciations')
class Denunciation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  city_id: string;

  @Column({ array: true, type: 'text' })
  images_url: string[] = [];

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(type => City, denunciations => Denunciation)
  @JoinColumn({ name: 'city_id' })
  city: City;
}

export default Denunciation;
