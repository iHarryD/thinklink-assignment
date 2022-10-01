import { NavItem } from "../navItem/NavItem";
import {
  faLayerGroup,
  faTv,
  faShoppingBag,
  faUserGroup,
  faGear,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import {
  AsideBar,
  CopyrightText,
  Initials,
  SideBarFooter,
  StyledSideNavbar,
} from "../styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SideNavbar() {
  return (
    <AsideBar>
      <StyledSideNavbar>
        {[
          { icon: faTv, title: "Dashboard" },
          { icon: faLayerGroup, title: "Inventory" },
          { icon: faShoppingBag, title: "Orders" },
          { icon: faUserGroup, title: "Customers" },
          { icon: faUserGroup, title: "Reports" },
          { icon: faGear, title: "Settings" },
        ].map(({ icon, title }, index) => (
          <NavItem key={title} icon={icon} title={title} isActive={!index} />
        ))}
      </StyledSideNavbar>
      <SideBarFooter>
        <Initials>CorkOwl</Initials>
        <CopyrightText>
          <FontAwesomeIcon icon={faCopyright} /> 2020 CorkOwl, All Rights
          Reserved
        </CopyrightText>
      </SideBarFooter>
    </AsideBar>
  );
}
