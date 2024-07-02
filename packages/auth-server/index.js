'use strict'

import { app } from './src/server.js'

const port = process.env.PORT || 5000
const host = process.env.HOST || 'localhost'
const serverLogMessage = `Authorization Server is running at http://${host}:${port}`

app.listen(5000, () => console.log(serverLogMessage))