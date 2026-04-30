export default class HolbertonCourse {
  constructor(name, length, students) {
    // Validation des types lors de la création
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter et Setter pour 'name'
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter et Setter pour 'length'
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Getter et Setter pour 'students'
  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value) || !value.every((s) => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
