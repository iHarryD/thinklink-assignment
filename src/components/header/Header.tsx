import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BellIconContainer,
  HorizontalFlexCentered,
  LogoContainer,
  ProfileAvatar,
  ProfileDetailsContainer,
  SearchBar,
  SearchBarLabel,
  SearchInput,
  StyledHeader,
} from "../styled";

export function Header() {
  return (
    <StyledHeader>
      <HorizontalFlexCentered>
        <LogoContainer>Corkowl</LogoContainer>
        <SearchBar>
          <SearchBarLabel htmlFor="search-bar">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </SearchBarLabel>
          <SearchInput
            id="search-bar"
            placeholder="Search wines, customers here..."
          />
        </SearchBar>
      </HorizontalFlexCentered>
      <HorizontalFlexCentered>
        <BellIconContainer>
          <FontAwesomeIcon icon={faBell} />
        </BellIconContainer>
        <ProfileDetailsContainer>
          <span>Nicholas D.</span>
          <ProfileAvatar></ProfileAvatar>
          <FontAwesomeIcon icon={faChevronDown} />
        </ProfileDetailsContainer>
      </HorizontalFlexCentered>
    </StyledHeader>
  );
}
