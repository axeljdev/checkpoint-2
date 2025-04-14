import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm";
import { Field, InputType, ObjectType } from "type-graphql";
@Entity()
@ObjectType()
export class Country extends BaseEntity {
  @PrimaryColumn()
  @Field()
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
  code: string;

  @Field()
  name: string;

  @Field()
  emoji: string;

  @Field()
  continent: string;
}
