import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import City from './cities';

@Entity('usersCreate')
class UserCreate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: false })
  password: string;

  @Column()
  city_id: string;

  @ManyToOne(type => City, usersCreate => UserCreate)
  @JoinColumn({ name: 'city_id' })
  city: City;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default UserCreate;
