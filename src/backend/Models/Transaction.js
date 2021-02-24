class Transaction {
  constructor(props) {
    this.id = props.id
    this.metadata = props.metadata
    this.request = props.request
    this.response = props.response
  }

  get id() {
    return this._id
  }

  get metadata() {
    return this._metadata
  }

  get request() {
    return this._request
  }

  get response() {
    return this._response
  }

  set id(value) {
    this._id = value
    return this._id
  }

  set metadata(value) {
    this._metadata = value
    return this._metadata
  }

  set request(value) {
    this._request = value
    return this._request
  }

  set response(value) {
    this._response = value
    return this._response
  }

  get props() {
    return {
      id: this.id,
      metadata: this.metadata,
      request: this.request,
      response: this.response
    }
  }

}

export default Transaction