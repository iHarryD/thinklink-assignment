import { NavButton } from "../styled";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export function NavItem({
  icon,
  isActive,
  title,
}: {
  icon: FontAwesomeIconProps["icon"];
  isActive?: boolean;
  title: string;
}) {
  return (
    <NavButton className={isActive ? "active" : undefined}>
      <FontAwesomeIcon icon={icon} width="20px" />
      <span>{title}</span>
    </NavButton>
  );
}
