class Entree {
  constructor(props) {
    // Define class components
    this.name = props.name
  }

  // MARK: Getters
  get name() {
    return this._name
  }

  // MARK: Setters
  set name(value) {
    this._name = value
    return this._name
  }

  get props() {
    return {
      name: this.name,
    }
  }
}

export default Entree
