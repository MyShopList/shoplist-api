import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { User } from './User'

@Entity()
export class Shop {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(type => User) @JoinColumn()
    user: User

    @Column()
    name: string

    @Column()
    logo: string

    @Column()
    description: string

    @Column()
    shopURL: string

    @Column()
    paymentGatewayLink: string

    @Column()
    isLive: string
}
