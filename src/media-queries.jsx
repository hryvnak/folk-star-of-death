import { subtract } from 'lodash';
import { useMediaQuery } from 'react-responsive';
import theme from './theme';

// ! maxWidth
export const FullSize = ({ children }) => {
  const isFullSize = useMediaQuery({ maxWidth: `${subtract(theme.screenSize.fullSize, 1)}px` });
  return isFullSize ? children : null;
}
export const FullSizeSmall = ({ children }) => {
  const isFullSizeSmall = useMediaQuery({ maxWidth: `${subtract(theme.screenSize.fullSizeSmall, 1)}px` });
  return isFullSizeSmall ? children : null;
}
export const FullSizeMini = ({ children }) => {
  const isFullSizeMini = useMediaQuery({ maxWidth: `${subtract(theme.screenSize.fullSizeMini, 1)}px` });
  return isFullSizeMini ? children : null;
}
export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ maxWidth: `${subtract(theme.screenSize.desktop, 1)}px` });
  return isDesktop ? children : null;
}
export const DesktopSmall = ({ children }) => {
  const isDesktopSmall = useMediaQuery({ maxWidth: `${subtract(theme.screenSize.desktopSmall, 1)}px` });
  return isDesktopSmall ? children : null;
}
export const DesktopMini = ({ children }) => {
  const isDesktopMini = useMediaQuery({ maxWidth: `${subtract(theme.screenSize.desktopMini, 1)}px` });
  return isDesktopMini ? children : null;
}
export const Laptop = ({ children }) => {
  const isLaptop = useMediaQuery({ maxWidth: `${subtract(theme.screenSize.laptop, 1)}px` });
  return isLaptop ? children : null;
}
export const LaptopSmall = ({ children }) => {
  const isLaptopSmall = useMediaQuery({ maxWidth: `${subtract(theme.screenSize.laptopSmall, 1)}px` });
  return isLaptopSmall ? children : null;
}
export const LaptopMini = ({ children }) => {
  const isLaptopMini = useMediaQuery({ maxWidth: `${subtract(theme.screenSize.laptopMini, 1)}px` });
  return isLaptopMini ? children : null;
}
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: `${subtract(theme.screenSize.tablet, 1)}px` });
  return isTablet ? children : null;
}
export const TabletSmall = ({ children }) => {
  const isTabletSmall = useMediaQuery({ maxWidth: `${subtract(theme.screenSize.tabletSmall, 1)}px` });
  return isTabletSmall ? children : null;
}
export const TabletMini = ({ children }) => {
  const isTabletMini = useMediaQuery({ maxWidth: `${subtract(theme.screenSize.tabletMini, 1)}px` });
  return isTabletMini ? children : null;
}
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: `${subtract(theme.screenSize.mobile, 1)}px` });
  return isMobile ? children : null;
}
export const MobileSmall = ({ children }) => {
  const isMobileSmall = useMediaQuery({ maxWidth: `${subtract(theme.screenSize.mobileSmall, 1)}px` });
  return isMobileSmall ? children : null;
}
export const MobileMini = ({ children }) => {
  const isMobileMini = useMediaQuery({ maxWidth: `${subtract(theme.screenSize.mobileMini, 1)}px` });
  return isMobileMini ? children : null;
}

// ! starting with minWidth
export const StartFullSize = ({ children }) => {
  const startFullSize = useMediaQuery({ minWidth: `${theme.screenSize.fullSize}px` });
  return startFullSize ? children : null;
}
export const StartFullSizeSmall = ({ children }) => {
  const startFullSizeSmall = useMediaQuery({ minWidth: `${theme.screenSize.fullSizeSmall}px` });
  return startFullSizeSmall ? children : null;
}
export const StartFullSizeMini = ({ children }) => {
  const startFullSizeMini = useMediaQuery({ minWidth: `${theme.screenSize.fullSizeMini}px` });
  return startFullSizeMini ? children : null;
}
export const StartDesktop = ({ children }) => {
  const startDesktop = useMediaQuery({ minWidth: `${theme.screenSize.desktop}px` });
  return startDesktop ? children : null;
}
export const StartDesktopSmall = ({ children }) => {
  const startDesktopSmall = useMediaQuery({ minWidth: `${theme.screenSize.desktopSmall}px` });
  return startDesktopSmall ? children : null;
}
export const StartDesktopMini = ({ children }) => {
  const startDesktopMini = useMediaQuery({ minWidth: `${theme.screenSize.desktopMini}px` });
  return startDesktopMini ? children : null;
}
export const StartLaptop = ({ children }) => {
  const startLaptop = useMediaQuery({ minWidth: `${theme.screenSize.laptop}px` });
  return startLaptop ? children : null;
}
export const StartLaptopSmall = ({ children }) => {
  const startLaptopSmall = useMediaQuery({ minWidth: `${theme.screenSize.laptopSmall}px` });
  return startLaptopSmall ? children : null;
}
export const StartLaptopMini = ({ children }) => {
  const startLaptopMini = useMediaQuery({ minWidth: `${theme.screenSize.laptopMini}px` });
  return startLaptopMini ? children : null;
}
export const StartTablet = ({ children }) => {
  const startTablet = useMediaQuery({ minWidth: `${theme.screenSize.tablet}px` });
  return startTablet ? children : null;
}
export const StartTabletSmall = ({ children }) => {
  const startTabletSmall = useMediaQuery({ minWidth: `${theme.screenSize.tabletSmall}px` });
  return startTabletSmall ? children : null;
}
export const StartTabletMini = ({ children }) => {
  const startTabletMini = useMediaQuery({ minWidth: `${theme.screenSize.tabletMini}px` });
  return startTabletMini ? children : null;
}
export const StartMobile = ({ children }) => {
  const startMobile = useMediaQuery({ minWidth: `${theme.screenSize.mobile}px` });
  return startMobile ? children : null;
}
export const StartMobileSmall = ({ children }) => {
  const startMobileSmall = useMediaQuery({ minWidth: `${theme.screenSize.mobileSmall}px` });
  return startMobileSmall ? children : null;
}
export const StartMobileMini = ({ children }) => {
  const startMobileMini = useMediaQuery({ minWidth: `${theme.screenSize.mobileMini}px` });
  return startMobileMini ? children : null;
}