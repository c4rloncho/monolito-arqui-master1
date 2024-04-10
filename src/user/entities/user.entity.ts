import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryColumn()
     email: string;
    @Column()
        name: string;
    @Column()
        password: string;
}
