"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    name;
    gender; // Must annotate the type
    age;
    constructor(name, gender, age) {
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
//# sourceMappingURL=app.js.map