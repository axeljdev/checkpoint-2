import { Arg, Mutation, Resolver, Query } from "type-graphql";
import { Country, CountryCreateInput } from "../entities/Country";

@Resolver()
export class CountriesResolver {
  @Mutation(() => Country)
  async createCountry(@Arg("data") data: CountryCreateInput): Promise<Country> {
    const newCountry = new Country();
    Object.assign(newCountry, data);
    await newCountry.save();
    return newCountry;
  }

  @Query(() => [Country])
  async countries(): Promise<Country[]> {
    return await Country.find();
  }

  @Query(() => Country, { nullable: true })
  async country(@Arg("code") code: string): Promise<Country | null> {
    return await Country.findOneBy({ code });
  }

  @Query(() => [Country])
  async countriesByContinent(
    @Arg("continent") continent: string
  ): Promise<Country[]> {
    return await Country.findBy({ continent });
  }
}
