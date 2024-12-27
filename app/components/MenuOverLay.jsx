import React from 'react'
import NavLink from './NavLink'

const MenuOverLay = ({links}) => {
  return (
    <ul className='flex flex-col text-lg py-5 items-center pb-7'>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>   
        ))}
    </ul>
  )
}

export default MenuOverLay