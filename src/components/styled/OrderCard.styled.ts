import styled from "styled-components";

export const StyledOrderCard = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px -2px 0px currentColor, 0px 2px 11px rgba(0, 0, 0, 0.06);
  color: ${({ color }) => (color ? color : "#000")};
  max-width: 16rem;
  min-width: fit-content;
  padding: 1rem;
`;

export const CardHeader = styled.div`
  align-items: center;
  display: flex;
  font-weight: 600;
  gap: 2em;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const CardTitle = styled.span`
  color: var(--LIGHT-GREY-CLR);
`;

export const OrderCount = styled.span`
  color: var(--DARK-TEXT-CLR);
  font-size: 1.2rem;
  font-weight: 700;
`;
