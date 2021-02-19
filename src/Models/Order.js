
class Order {
  constructor(props) {
    this.id = props.id
    this.userId = props.userId
    this.timeCreated = props.timeCreated
    this.timeScheduled = props.timeScheduled
    this.status = props.status
    this.isComplete = props.isComplete
  }

  get id() {
    return this._id
  }

  get userId() {
    return this._userId
  }

  get timeCreated() {
    return this._timeCreated
  }

  get timeScheduled() {
    return this._timeScheduled
  }

  get status() {
      return this._status
  }
  get isComplete() {
      return this._isComplete
  }

  set id(value) {
    this._id = value
    return this._id
  }

  set userId(value) {
    this._userId = value
    return this._userId
  }

  set timeCreated(value) {
    this._timeCreated = value
    return this._timeCreated
  }

  set this.timeScheduled(value) {
    this._timeScheduled = value
    return this._timeScheduled
  }

  get props() {
    return {
      id: this.id,
      userId: this.userId,
      timeCreated: this.timeCreated,
      timeScheduled: this.timeScheduled,
      status: this.status,
      isComplete: this.isComplete
    }
  }

}

export default Order
