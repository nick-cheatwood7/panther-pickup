class Cart {
    constructor(props){
        this.id = props.id
        this.userId = props.userId
        this.cartItems = props.cartItems
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

    get cartItems(){
        return this._cartItems
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

    set cartItems(value){
        this._cartItems = value
        return this._cartItems
    }

    get props() {
        return {
            id: this.id,
            userId: this.userId,
            cartItems: this.cartItems,
            countItems: this.countItems,
            totalCost: this.totalCost
        }
    }
}

export default Cart