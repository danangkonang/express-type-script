const port = process.env.PORT || 5000
const app = require('./router')
app.listen(port, () => console.log(`app listening on port ${port}!`))

// "test": "echo \"Error: no test specified\" && exit 1",