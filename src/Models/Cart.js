class Cart {
    constructor(props){
        this.id = props.id
        this.userId = props.userId
        this.countItems = props.countItems
        this.totalCost = props.totalCost
    }

    get id(){
        return this._id
    }

    get userId(){
        return this._userId
    }

    get countItems(){
        return this._countItems
    }

    set id(value) {
        this._id = value
        return this._id
    }

    set userId(value) {
        this._userId = value
        return this._userId
    }
    set countItems(value) {
        this._countItems = value
        return this._countItems
    }

    get props() {
        return {
          id: this.id,
          userId: this.userId,
          countItems: this.countItems
        }
    }
}

export default Cart