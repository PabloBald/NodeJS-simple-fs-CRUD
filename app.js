const { argv } = require("./config/yargs")
const posts = require("./posts/index")

let command = argv._[0]
let post

switch (command) {
	case "create":
		post = posts.create(argv.title)
		console.log("Create command executed.\n" + argv.title + " created.")
		break
	case "read":
		post = posts.read(argv.id)
		console.log("Read ", post)
		break
	case "update":
		post = posts.update(argv.id, argv.title)
		console.log(post)
		break
    case "delete":
        post = posts.delete(argv.id)
        console.log(post)
        break
	default:
		console.log("Command not recognized")
}