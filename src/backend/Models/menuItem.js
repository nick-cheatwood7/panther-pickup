class Entree {
    constructor(props) {
      this.id = props.id
      this.name = props.name
      this.description = props.description
    }
  
    get id() {
      return this._id
    }
  
    get name() {
      return this._name
    }
    get description() {
        return this._description
    }
    set id(value) {
        this._id = value
        return this._id
    }
    
      set name(value) {
        this._name = value
        return this._name
    }
    set description(value) {
        this._description = value
        return this._description
    }
    get props() {
        return {
          id: this.id,
          name: this.name,
          description: this.description,
        }
      }
    
}
    
export default Entree