const port = 3000
const app = require('./router')
app.listen(port, () => console.log(`app listening on port ${port}!`))