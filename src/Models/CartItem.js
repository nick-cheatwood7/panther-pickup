class CartItem{
    constructor(props){
        this.id = props.id
        this.userId = props.userId
        this.countItems = props.countItems
        this.totalCost = props.totalCost
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
export default CartItem