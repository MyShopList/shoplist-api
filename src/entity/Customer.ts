import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Shop } from './Shop'

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(type => Shop) @JoinColumn()
    shop: Shop

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    mobile: string

    @Column({
        type: "simple-array"
    })
    address: string
}
