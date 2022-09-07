import React, { useState, useEffect, useRef } from 'react';
import MenuWrapper from './MenuWrapper';
import { StyledShadow } from "./Shadow/Shadow.styles";
import MenuButton from './MenuButton';
import MainNavBar from './MainNavBar';

const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const toogleOpen = () => {
    setOpen(!isOpen)
  }

  // ? Remove body scrollbar when menu is open 

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => document.body.style.overflow = 'unset';
  })

  // ? Detect click outside

  const menuRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    }
  })

  return (
    <>
      <StyledShadow className={ isOpen ? "visible" : "hidden" } />
      <div ref={ menuRef }>
        <MenuButton 
          onClick={ toogleOpen } 
          className={ isOpen ? "open" : null } 
          ariaLabel={ isOpen ? "Закрити меню" : "Відкрити меню" } 
        />
        <MenuWrapper className={ isOpen ? "open" : "closed" }>
          <MainNavBar closeMenuWrapper={ () => setOpen(false) } />
        </MenuWrapper>
      </div>
    </>
  )
}

export default BurgerMenu;
