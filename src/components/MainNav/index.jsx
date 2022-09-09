import { uniqueId } from 'lodash';
import React from 'react';
import { routes } from '../../routes';
import { StyledMainNav } from './index.styles';
import NavLink from './Link';

const MainNav = () => {
  return (
		<StyledMainNav>
      {
        Object.entries(routes).map(([routeKey, routeValue]) => {
          return (
            <NavLink 
              onClick={() => window.scrollTo(0, 0)}
              key={ uniqueId() } 
              to={ routeValue.path }
            >
              { routeValue.name }
            </NavLink>
          )
        })
      }
		</StyledMainNav>
	)
}
export default MainNav;
