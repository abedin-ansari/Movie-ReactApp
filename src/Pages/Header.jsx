import React, { useState } from 'react';
import NavListItem from '../components/NavListItem';
import navListData from '../data/navListData';
import './header.css'                            
import Search from '../components/Search';
import Button from '../components/Button';

function Header( {scroll} ) {
  const [navList, setNavList] = useState(navListData);
   const handleNavOnClick = id => {
    const newNavList = navList.map(nav => {
      nav.active = false;
      if(nav._id === id) nav.active = true;
      return nav;
    });

    setNavList(newNavList);
    };
  return (
    <header className={`${scroll > 100 ? 'scrolled' : undefined}`} >
      <a href="/" className='logo'>
        Cinema
      </a>
      <ul className='nav'>
        {
          navListData.map(nav => (
            <NavListItem key={nav._id} nav={nav} navOnClick={handleNavOnClick} />
          ))
        }
      </ul>
      <Search />
      <Button 
        icon={<ion-icon name="log-in-outline"></ion-icon>} 
        name='Sign In'
      />
    </header>
  );
}

// function Header() {
//   return (
//     <header>
//         <a href="/" className='logo'>
//             Cinema
//         </a>
//         <ul className='nav'>
//         {
//             navListData.map(nav=>(
//                 <NavListItem key={nav._id} nav={nav} />
//             ))
//         }
//         </ul>
//         <Search />
//         <Button 
//           icon={<ion-icon name="log-in-outline"></ion-icon>} 
//           name='Sign In'
//         />
//     </header>
//   )
// }

export default Header;
