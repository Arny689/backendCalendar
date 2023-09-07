import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('deals')
export class Deals {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    year: number

    @Column()
    month: number

    @Column()
    day: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    explanation: string
}