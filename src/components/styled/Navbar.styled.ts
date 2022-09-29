import styled from "styled-components";

export const AsideBar = styled.aside`
  background: #f7f1f3;
  border-right: 1px solid #ecf1f4;
  color: var(--DARK-GREY-CLR);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  min-width: fit-content;
  width: min(15rem, 15vw);
`;

export const StyledSideNavbar = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const NavButton = styled.button`
  align-items: center;
  display: flex;
  font-weight: 600;
  gap: 1.2em;
  padding: var(--SIDE-NAVBAR-PADDING-Y) var(--SIDE-NAVBAR-PADDING-X);

  &.active {
    border-right: 2px solid currentColor;
    color: var(--ACCENT-MAROON-CLR);
  }
`;

export const SideBarFooter = styled.footer`
  padding: var(--SIDE-NAVBAR-PADDING-Y) var(--SIDE-NAVBAR-PADDING-X);
`;

export const Initials = styled.p`
  font-weight: 600;
  margin-bottom: 10px;
`;

export const CopyrightText = styled.p`
  font-size: 0.7em;
`;
