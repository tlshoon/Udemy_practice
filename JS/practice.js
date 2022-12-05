const person = {
    first : "Robert",
    last : "Herjavec",
    fullName() {
        return `${this.first} ${this.last}`
    }
}

person.fullName()
person.last = "Plane";
person.fullName()