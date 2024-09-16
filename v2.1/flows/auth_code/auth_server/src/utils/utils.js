'use ctrict'

import { createHash, randomBytes } from 'node:crypto'


export const generateClientID = () => randomBytes(24).toString('hex')

export const generateClientSecret = () => randomBytes(24).toString('base64url')

export const hash = (data) => createHash('sha256').update(data).digest('base64')