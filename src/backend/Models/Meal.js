class Meal {
    constructor(props) {
      this.id = props.id
      this.name = props.name
      this.entrees  = props.entrees
    }

    get id() {
      return this._id
    }

    get name() {
      return this._name
    }

    get entrees() {
      return this._entrees
    }

    set id(value) {
      this._id = value
      return this._id
    }

    set name(value) {
      this._name = value
      return this._name
    }

    set entrees(value) {
      this._entrees = value
      return this._entrees
    }

    get props() {
      return {
        id: this.id,
        name: this.name,
        entrees: this.entrees,
      }
    }

  }

  export default Meal