import styled from "styled-components";

export const StyledHeader = styled.header`
  align-items: center;
  background: var(--ACCENT-MAROON-CLR);
  display: flex;
  color: #fff;
  justify-content: space-between;
  height: var(--HEADER-HEIGHT);
  padding: 10px var(--BODY-PADDING-X);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const LogoContainer = styled.span`
  font-size: 1.2em;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const ProfileDetailsContainer = styled.div`
  align-items: center;
  display: inline-flex;
  font-weight: 600;
  gap: 12px;
`;

export const ProfileAvatar = styled.span`
  aspect-ratio: 1;
  background: #fff;
  border-radius: 50%;
  width: 2rem;
`;

export const BellIconContainer = styled.span`
  font-size: var(--ICON-SIZE);
  margin: 0 1.5em;
`;

export const SearchBar = styled.div`
  background: #fff;
  border-radius: 4px;
  color: var(--DARK-GREY-CLR);
  display: inline-block;
  margin-inline-start: min(10vw, 10rem);
  overflow: hidden;
  padding: 0.5em 1em;
  position: relative;
  width: min(35vw, 25rem);
`;

export const SearchBarLabel = styled.label`
  font-size: var(--ICON-SIZE);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const SearchInput = styled.input`
  padding-inline-start: calc(var(--ICON-SIZE) + 1rem);
  width: 100%;
`;
