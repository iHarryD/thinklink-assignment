import styled from "styled-components";

export const StyledInventoryItem = styled.tr<{ paddingBottom?: number }>`
  border-bottom: thin solid #0001;
  border-top: thin solid #0001;
  color: var(--LIGHT-GREY-CLR);
  font-size: 0.9rem;
  font-weight: 600;
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom ? `${paddingBottom}px` : 0};
  position: relative;
`;

export const ItemImage = styled.div`
  aspect-ratio: 1;
  background: #000;
  border-radius: 4px;
  width: 3rem;
`;

export const ItemTitle = styled.p`
  color: var(--DARK-TEXT-CLR);
  max-width: 25ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ItemMetaDetails = styled.p`
  font-weight: 400;
`;

export const TableBodyCell = styled.td`
  padding: 1rem;
`;

export const TableHeadCell = styled.th`
  padding: 1rem;
`;

export const TableHeadRow = styled.tr`
  border-bottom: thin solid #0001;
  border-top: thin solid #0001;
`;

export const ProductTitleImageContainer = styled(TableBodyCell)`
  align-items: center;
  display: flex;
  gap: 1em;
`;

export const ItemPrice = styled(TableBodyCell)`
  color: var(--DARK-TEXT-CLR);
`;

export const InventoryTable = styled.table`
  border-collapse: collapse;
  text-align: left;
  width: 100%;
`;

export const InventoryTableHead = styled.thead`
  color: var(--DARK-GREY-CLR);
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const ChevronIcon = styled.td`
  color: var(--DARK-TEXT-CLR);
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

export const ExpandedInventoryItemContainer = styled.td`
  font-weight: 600;
  padding: 1em 2.5em;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
`;

export const ExpandedItemDetails = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
`;

export const ExpandedItemTitle = styled(ItemTitle)`
  margin-bottom: 10px;
  max-width: unset;
  overflow: auto;
  text-overflow: unset;
  white-space: unset;
`;

export const ItemRegionVintageContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 4em;
`;

export const ItemUtilities = styled.div`
  align-items: center;
  display: flex;
  gap: 2em;
`;

export const ItemStatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 1em;
`;

export const ItemStatsType = styled.p`
  color: var(--LIGHT-GREY-CLR);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 1em;
  text-transform: uppercase;
`;

export const StatChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ChipTitle = styled.p`
  margin-bottom: 5px;
`;
