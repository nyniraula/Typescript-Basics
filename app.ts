class Human {
  public name: string;
  private gender: string; // Must annotate the type
  protected age: number;

  constructor(name: string, gender: string, age: number) {
    // Type parameters in constructor
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  changeAgeGender() {
    // public method by default
    this.age = 30;
    this.gender = "female";
  }
}
