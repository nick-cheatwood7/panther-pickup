class Payment {
  constructor(props) {
    this.id = props.id
    this.studentId = props.studentId
    this.paymentAmount = props.paymentAmount
  }

  get id() {
    return this._id
  }

  get studentId() {
    return this._studentId
  }

  get paymentAmount() {
    return this._paymentAmount
  }

  set id(value) {
    this._id = value
    return this._id
  }

  set studentId(value) {
    this._studentId = value
    return this._studentId
  }

  set paymentAmount(value) {
    this._paymentAmount = value
    return this._paymentAmount
  }

  get props() {
    return {
      id: this.id,
      studentId: this.studentId,
      paymentAmount: this.paymentAmount
    }
  }

}

export default Payment