import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Shop } from './Shop'
import { Product } from './Product'
import { Customer } from './Customer'

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(type => Shop) @JoinColumn()
    shop: Shop

    @OneToOne(type => Product) @JoinColumn()
    product: Product

    @OneToOne(type => Customer) @JoinColumn()
    customer: Customer

    @Column()
    amount: number
}
