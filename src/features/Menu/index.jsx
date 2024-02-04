import React, { useEffect, useState } from 'react'
import { getCategories } from 'src/services/categories'
import MenuList from './components/MenuList'

function MenuCategories() {
  const [menuList, setMenuList] = useState([])
  useEffect(() => {
    async function getData() {
      const res = await getCategories()
      setMenuList(res)
    }
    getData()
  }, [])

  return <MenuList menus={menuList} />
}

MenuCategories.propTypes = {}

export default MenuCategories
