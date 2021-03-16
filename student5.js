class Foo {
  #value;
  
  constructor(value) {
    this.#value = value;
  }
  
  // Get value
  get value() {
    return this.#value;
  }

	// Set value
	set value(value) {
    this.#value = value;
  }
}

// Create Foo object.
var foo = new Foo(5);
// Get value
var val = foo.value;
// Set value
foo.value = 10;
Let us now update our student.js file to have getters and setters for Programme:
// A definition of a programme
class Programme {
    // Programme code
    #code;
    // Programme name
    #name;

    // Creates a new instance of type Programme
    constructor(code, name) {
        this.#code = code;
        this.#name = name;
    }

    // Get code
    get code() {
        return this.#code;
    }

    // Set code
    set code(value) {
        this.#code = value;
    }

    // Get name
    get name() {
        return this.#name;
    }

    // Set name
    set name(value) {
        this.#name = value;
    }
}
And finally we need to update tableRow() of Student to the following:
tableRow() {
    return `<tr><td>${this.#id}</td><td>${this.#name}</td><td>${this.#programme.name}</td></tr>`;
}