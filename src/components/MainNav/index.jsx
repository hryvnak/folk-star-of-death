import { uniqueId } from 'lodash';
import React from 'react';
import { routes } from '../../routes';
import { StyledMainNav } from './index.styles';
import NavLink from './Link';

const MainNav = () => {
  return (
		<StyledMainNav>
      {
        routes.map((route) => 
          <NavLink key={ uniqueId() } to={ route.path }>{ route.name }</NavLink>
        )
      }
		</StyledMainNav>
	)
}
export default MainNav;
