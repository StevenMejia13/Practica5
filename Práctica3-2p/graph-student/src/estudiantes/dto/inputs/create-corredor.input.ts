import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional} from 'class-validator';

@InputType()
export class CreateCorredorInput {

  @Field(()=>String )
  @IsNotEmpty()
  identificacion:string;

  @Field(()=>String )
  @IsNotEmpty()
  nombre:string;

  @Field(()=>String )
  @IsNotEmpty()
  peso:string;

  @Field(()=>[String], {nullable:true} )
  @IsNotEmpty()
  edad:string[];

  @Field(()=>Boolean )
  @IsOptional()
  @IsNotEmpty()
  estado:boolean;
  
}
