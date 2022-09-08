import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import React from 'react';
import { routes } from '../../../routes';
import { StyledMainNavBarLink as Link } from './Link.styles';
import { StyledMainNavBar } from './index.styles';

const MainNavBar = ({ closeMenuWrapper }) => {
  return (
		<StyledMainNavBar>
      {
        Object.entries(routes).map(([routeKey, routeValue]) => {
          return (
            <Link 
              onClick={ closeMenuWrapper }
              key={ uniqueId() } 
              to={ routeValue.path }
            >
              { routeValue.name }
            </Link>
          )
        })
      }
		</StyledMainNavBar>
	)
}

MainNavBar.propTypes = {
  closeMenuWrapper: PropTypes.func
}

export default MainNavBar;
