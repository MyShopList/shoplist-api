import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Shop } from './Shop';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(type => Shop) @JoinColumn()
    shop: Shop

    // fk
    @Column()
    category: number

    @Column()
    title: string

    @Column()
    price: number

    @Column()
    inventory: number

    @Column({
        type: "simple-array"
    })
    images: string[]

    @Column()
    shortDescription: string

    @Column()
    fullDescription: string

    @Column()
    isActive: boolean
}
