'use ctrict'

import { randomBytes } from 'crypto'

export const generateClientID = () => randomBytes(24).toString('hex')

export const generateClientSecret = () => randomBytes(24).toString('base64url')