import express from 'express'

const app = new express()

app.listen(5100, () => {
    console.log('Server running at port 5100')
})

//middleware
app.use(express.json())

const router = express.Router()

app.use("/", router)

//router lvel middleware
router.use((req,res,next) => {
    console.log(req.method)
    next()
})

//router level api
router.get('/user', (req,res) => {
    res.send("hello from user")
})

function logger(req,res,next) {
    console.log('logger middleware')
    next()
}

router.get('/user/:id', logger, (req, res) => {
    res.send("user id")
})

//Application level middleware
app.use((req, res, next) => {
    console.log(req.method)
    next()
}, (req, res, next) => {
    console.log('came to next middleware')
    next()
})

const books = [{
    id: 1,
    title: 'hill',
    desc: 'lorem',
},
{
    id: 2,
    title: 'hill',
    desc: 'lorem',
},
{
    id: 3,
    title: 'hill',
    desc: 'lorem',
}]

app.get("/", (req, res) => {
    res.send("hello from get API")
})

app.get('/books', (req, res) => {
    res.send(books)
})

app.post('/book', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        desc: req.body.desc
    }
    books.push(newBook)
    res.send(newBook)

})

app.put('/book/:id', (req, res) => {
    const bookId = req.params.id
    const book = books.find(b => b.id == bookId)
    if(!book) {
        return res.status(404).json({"message":"book with requested is does not exist"})
    }

    const keys = Object.keys(req.body)
    keys.forEach(key => book[key] = req.body[key])
    return res.send(book)
})

app.delete('/book/:id', (req, res) => {
    const bookId = req.params.id
    const book = books.find(b => b.id == bookId)
    if(!book) {
        return res.status(404).json({message: 'Book not found'})
    }
    const filteredBooks = books.filter(b => b.id != bookId)
    return res.send(filteredBooks)
})