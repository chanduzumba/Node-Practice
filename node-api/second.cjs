const x = 10
const abc = () => {
    console.log('Hello from second file')
}
const user = {
    name: 'Chandu'
}

module.exports = {
    x,
    abc,
    user
}

// console.log('require----------', require)
// console.log('exports --------------',exports)
// console.log('module---------------', module)
// console.log('__filename---------', __filename)
// console.log('__dirname---------', __dirname)