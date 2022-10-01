import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardHeader, CardTitle, OrderCount, StyledOrderCard } from "../styled";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export function OrderCard({
  color,
  count,
  icon,
  title,
}: {
  color: string;
  count: number;
  icon: IconProp;
  title: string;
}) {
  return (
    <StyledOrderCard color={color}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <FontAwesomeIcon icon={icon} />
      </CardHeader>
      <OrderCount>{count}</OrderCount>
    </StyledOrderCard>
  );
}
