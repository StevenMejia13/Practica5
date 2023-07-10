import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'corred'})
@ObjectType()
export class Corredor {
  
    @PrimaryGeneratedColumn('uuid')
    @Field(()=> ID)
    id:string;
    
    @Column()
    @Field(()=> String)
    identificacion:string;

    @Column()
    @Field(()=>String)
    nombre:string;

    @Column()
    @Field(()=>String)
    peso:string;

    @Column('text',{array:true})
    @Field(()=>[String] ,{nullable:true} )
    edad:string[];

    @Field(()=>Boolean )
    estado:boolean;

}
