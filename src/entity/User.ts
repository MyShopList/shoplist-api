import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({
        type: "varchar",
        length: 200,
        unique: true
    })
    email: string

    @Column()
    password: string

    @Column()
    isEmailVerified: boolean

    @Column()
    phone: string

    @Column()
    isPhoneVerified: boolean
}
