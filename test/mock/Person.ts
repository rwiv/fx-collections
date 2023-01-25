import Optional from "@libs/optional/Optional";
import SubAbstractPerson from "./SubAbstractPerson";

export default class Person extends SubAbstractPerson<Person> {

  constructor(
    public readonly name: string,
    public readonly age: number
  ) {
    super(name, age);
  }

  run = () => Optional.of(this as Person);
}