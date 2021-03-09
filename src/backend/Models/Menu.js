
class Menu {
  constructor(props){
    this.id = props.id
    this.name = props.name
    this.startDate = props.startDate
    this.endDate = props.endDate
    this.startTime = props.startTime
    this.endTime = props.endTime
    this.year = props.year
    this.term = props.term
  }

  get id(){
      return this._id
  }

  get itemId(){
      return this._itemId
  }

  set id(value) {
      this._id = value
      return this._id
    }

  set itemId(value) {
      this.itemId = value
      return this.itemId
  }

  get props() {
      return {
          id: this.id,
          itemId: this.itemId
      }
  }
}
export default Menu