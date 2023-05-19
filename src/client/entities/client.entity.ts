import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
    id: number;

  @Column({ length: 100 })
    name: string;

  @Column({ length: 100 })
    email: string;

  @Column({ length: 20 })
    phone: string;

  @Column({ length: 255 })
    address: string;
}
