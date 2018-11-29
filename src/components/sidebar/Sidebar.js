import React, { useContext } from 'react'
import { Context, actions, selectors } from '../../store'
import AnimatedSidebar from './AnimatedSidebar'
import Container from './SidebarContainer'

function Sidebar() {
  const store = useContext(Context)
  const closeSidebar = () => store.dispatch(actions.setActiveItem(''))
  const createNew = data => store.dispatch(actions.createNew(data))
  const deleteItem = () =>
    console.log('heyyy') || store.dispatch(actions.deleteItem())
  const data = selectors.getCurrentItem(store)
  const allGroups = store.groups

  return (
    <AnimatedSidebar show={store.activeItem} onClose={closeSidebar}>
      <Container
        itemData={data}
        current={store.current}
        closeSidebar={closeSidebar}
        createNew={createNew}
        deleteItem={deleteItem}
        allGroups={allGroups}
      />
    </AnimatedSidebar>
  )
}

export default Sidebar
