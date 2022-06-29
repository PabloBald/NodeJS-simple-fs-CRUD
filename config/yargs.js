const id = {
    demand:true,
    alias:'i',
    desc:'Post id'
}
const title = {
    demand: true,
    alias:'t',
    desc:'Post title'
} 

const argv = require("yargs")
.command('create','Creates new post',{
    title
})
.command('read','Reads a post',{
    id
})
.command('update','Updates a post',{
    id,
    title
})
.command('delete','Deletes a post',{
    id
})
.argv

module.exports = {
    argv
}