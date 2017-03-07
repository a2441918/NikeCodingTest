import * as actions from './actions'

describe('add users', () => {
  it('startUserAdd should create START_USER_ADD action', () => {
    expect(actions.startUserAdd('Use Redux')).toEqual({
      type: 'START_USER_ADD',
      text: 'Use Redux'
    })
  })

  it('receiveUsers should create RECEIVE_USERS action', () => {
    expect(actions.receiveUsers('users')).toEqual({
      type: 'RECEIVE_USERS',
      users: 'active'
    })
  })
})
