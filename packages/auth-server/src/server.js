'use strict'

import express from 'express'
import { dirname, join } from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url'

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', express.static(join(__dirname, '../public')))
// app.use('/admin', adminAPI) // need to implement admin API
// app.use('/auth', authAPI) // need to implement auth API
// app.use('/token', tokenAPI) // need to implement auth API
// app.use('/refreshtoken', tokenAPI) // need to implement auth API
// app.get('/auth', (req, res) => res.json({ code: 'asfasbasf26xf5dfchudqwe06rRjl8dsd1v-' }))
// app.get('/token', (req, res) => res.json({ access_token: 'asfasbasf26xf5dfchudqwe06rRjl8dsd1v.sjsdfksffjnfsffdfs.fdsfdsfjhlewqemoeasdksdha5+fsdfvxhcgf', expiresIn: 3600 }))
// app.get('/.wellknown', (req, res) => res.json({}))

app.use('*', (req, res) => res.status(404).sendFile(join(__dirname, './404page.html')))

export { app }