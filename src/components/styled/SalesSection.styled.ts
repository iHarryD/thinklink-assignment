import styled from "styled-components";

export const SalesDetailsSection = styled.section`
  border: 1px solid #fff2ee;
  padding: var(--SECTION-PADDING);
  padding-bottom: 0;
`;

export const SalesSectionHeader = styled.div`
  align-items: center;
  color: var(--LIGHT-GREY-CLR);
  display: flex;
  font-weight: 600;
  justify-content: space-between;
  padding-bottom: var(--SECTION-PADDING);
`;

export const SalesOverviewContainer = styled.div`
  display: flex;
`;

export const HeaderTitle = styled.p`
  color: var(--DARK-TEXT-CLR);
  margin-bottom: 3px;
`;

export const SalesFilter = styled.span`
  margin-inline-start: 3em;
`;

export const ActiveFilter = styled.span`
  color: var(--DARK-TEXT-CLR);
  font-weight: 700;
  padding-inline-start: 5px;
`;

export const SummarySidebar = styled.aside`
  font-weight: 700;
  padding: 1em 2em;
`;

export const ProfitContainer = styled.div`
  margin-bottom: 2em;
`;

export const TotalCount = styled.p`
  color: ${({ color }) => color || "var(--DARK-TEXT-CLR)"};
  font-size: 2rem;
  margin: 0.2em 0 0.15em;
`;

export const Growth = styled.p`
  color: #2fca72;
  font-weight: 700;
`;

export const GraphHeader = styled.div`
  align-items: center;
  display: flex;
  font-weight: 600;
  justify-content: space-between;
`;

export const TotalSales = styled.p`
  font-size: 3rem;
  margin-bottom: 0.2em;
`;

export const GraphContainer = styled.div`
  flex-grow: 1;
  padding: 0.5em 1em;
`;
