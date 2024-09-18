'use strict'

let logStore

export class Log {

  constructor(log) {
    this.id = log.id
    this.message = log.id
    this.clientId = log.clientId
    this.email = log.email
    this.sessionId = log.sessionId
    this.timestamp = new Date().getTime()
  }
}

export class LogStore {

  static async init(db) {
    if (!logStore) {
      logStore = db.collection("logStore")
    }
  }

  static async addLog(logInfo) {
    try {
      const result = await logStore.insertOne(logInfo)
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async listLogs() {
    try {
      const query = {}
      const logsList = await logStore.find(query)
      return logsList
    } catch (e) {
      throw new Error(e)
    }
  }

  static async listLogsByEmailId(email) {
    try {
      const query = { email }
      const logsList = await logStore.find(query)
      return logsList
    } catch (e) {
      throw new Error(e)
    }
  }

  static async listLogsByClientIdAndEmailId(clientId, email) {
    try {
      const query = { clientId, email }
      const logsList = await logStore.find(query)
      return logsList.toArray()
    } catch (e) {
      throw new Error(e)
    }
  }

  static async listLogsByDateRange(startDate, endDate) {
    try {
      const pipeline = [
        {
          $match: {
            $and: [
              { timestamp: { $gte: startDate } },
              { timestamp: { $lte: endDate } }
            ]
          }
        }
      ]
      const result = await logStore.aggregate(pipeline)
      return result.toArray()
    } catch (e) {
      throw new Error(e)
    }
  }

  static async listLogsByEmailIdAndDateRange(email, startDate, endDate) {
    try {
      const pipeline = [
        {
          $match: {
            $and: [
              { timestamp: { $gte: startDate } },
              { timestamp: { $lte: endDate } },
              { email }
            ]
          }
        }
      ]
      const result = await logStore.aggregate(pipeline)
      return result.toArray()
    } catch (e) {
      throw new Error(e)
    }
  }

  static async listLogsByClientIdAndEmailIdAndDateRange(clientId, email, startDate, endDate) {
    try {
      const pipeline = [
        {
          $match: {
            $and: [
              { timestamp: { $gte: startDate } },
              { timestamp: { $lte: endDate } },
              { email },
              { clientId }
            ]
          }
        }
      ]
      const result = await logStore.aggregate(pipeline)
      return result.toArray()
    } catch (e) {
      throw new Error(e)
    }
  }

  static async updateEmailByEmailId({ oldEmail, newEmail }) {
    try {
      const result = await logStore.updateMany({ email: oldEmail }, { $set: { email: newEmail } })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async deleteAllLogs() {
    try {
      const result = await logStore.deleteMany({})
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async deleteAllLogsByEmailId(email) {
    try {
      const result = await logStore.deleteMany({ email })
      return { success: true }
    } catch (e) {
      throw new Error(e)
    }
  }

  static async deleteAllLogsByClientIdAndEmailId(clientId, email) {
    try {
      const query = { clientId, email }
      const result = await logStore.deleteMany(query)
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  static async deleteLogByLogId(logId) {
    try {
      const query = { _id: new ObjectId(logId) }
      const result = await logStore.deleteOne(query)
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

}
