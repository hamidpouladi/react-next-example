export const resetStore = () => ({ type: 'reset' })

export const setCurrent = current => ({ type: 'set.current', payload: current })

export const setUsers = users => ({ type: 'set.users', payload: users })

export const setGroups = groups => ({ type: 'set.groups', payload: groups })

export const setActiveItem = item => ({ type: 'set.activeItem', payload: item })

export const deleteItem = item => ({ type: 'deleteItem', payload: item })

export const createOrUpdateItem = item => ({
  type: 'createOrUpdateItem',
  payload: item
})
