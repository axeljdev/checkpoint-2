import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm";
import { Field, InputType, ObjectType } from "type-graphql";
import { MaxLength } from "class-validator";

@Entity()
@ObjectType()
export class Country extends BaseEntity {
  @PrimaryColumn()
  @Field()
  @MaxLength(2, {
    message: "Le code du pays doit contenir 2 caractères maximum",
  })
  code: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  emoji: string;

  @Column()
  @Field()
  continent: string;
}

@InputType()
export class CountryCreateInput {
  @Field()
  @MaxLength(2, {
    message: "Le code du pays doit contenir 2 caractères maximum",
  })
  code: string;

  @Field()
  name: string;

  @Field()
  emoji: string;

  @Field()
  @MaxLength(2, {
    message: "Le code du continent doit contenir 2 caractères maximum",
  })
  continent: string;
}
