import mongoose from 'mongoose'
import sys from '../sys.js'

class Db {

    open = () => {
        mongoose.connect(sys.apiUrl, {useNewUrlParser: true, useUnifiedTopology: true});
    }

    close = () => {
        return
    }

}

export default Db