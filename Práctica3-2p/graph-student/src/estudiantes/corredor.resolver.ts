import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { CorredorsService } from './corredor.service';
import { Corredor } from './entities/corredor.entity';
import { UpdateCorredorInput, CreateCorredorInput } from './dto/inputs';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Corredor)
export class CorredorsResolver {
  constructor(private readonly corredorsService: CorredorsService) {}

  @Mutation(() => Corredor)
  async createMascota(@Args('createCorredorInput') createCorredorInput: CreateCorredorInput)
  :Promise<Corredor> {
    return this.corredorsService.create(createCorredorInput);
  }

  @Query(() => [Corredor], { name: 'corredors' })
  async findAll():Promise<Corredor[]> {
    return this.corredorsService.findAll();
  }

  @Query(() => Corredor, { name: 'corredor' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Corredor> {
    return this.corredorsService.findOne(id);
  }

  @Mutation(() => Corredor)
  updateEstudiante(@Args('updateCorredorInput') updateCorredorInput: UpdateCorredorInput): Promise<Corredor> {
    return this.corredorsService.update(updateCorredorInput.id, updateCorredorInput);
  }

  @Mutation(() => Corredor)
  removeEstudiante(@Args('id', { type: () => ID }) id: string): Promise<Corredor> {
    return this.corredorsService.remove(id);
  }
}
