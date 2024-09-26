import mongoose from 'mongoose'
import { describe, expect, test, beforeAll } from '@jest/globals'
import { createUser } from '../services/users.js'

let testUser = null

beforeAll(async () => {
  testUser = await createUser({ username: 'eli', password: 'terhun2' })
})
describe('login user', () => {
  test('validate user has been successfully created', async () => {
    expect(testUser._id).toBeInstanceOf(mongoose.Types.ObjectId)
  })

  test('create existing username', async () => {
    const post = { username: 'eli', password: 'terhun2' }
    try {
      await createUser(post)
    } catch (e) {
      expect(e.code).toBe(11000)
      expect(e.message).toEqual(
        expect.stringContaining('E11000 duplicate key error collection'),
      )
    }
  })
  test('create existing username', async () => {
    const post = { username: 'eli', password: 'terhun2' }
    try {
      await createUser(post)
    } catch (e) {
      expect(e.code).toBe(11000)
      expect(e.message).toEqual(
        expect.stringContaining('E11000 duplicate key error collection'),
      )
    }
  })
  test('create existing username', async () => {
    const post = { username: 'eli', password: 'terhun2' }
    try {
      await createUser(post)
    } catch (e) {
      expect(e.code).toBe(11000)
      expect(e.message).toEqual(
        expect.stringContaining('E11000 duplicate key error collection'),
      )
    }
  })
})
