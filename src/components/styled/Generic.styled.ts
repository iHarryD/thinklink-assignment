import styled from "styled-components";

export const HorizontalFlexCentered = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Checkbox = styled.input`
  aspect-ratio: 1;
  border: 2px solid var(--LIGHT-GREY-CLR);
  border-radius: 4px;
  cursor: pointer;
  display: block;
  width: 1rem;

  &:checked {
    background: var(--ACCENT-PINK-CLR);
    border-color: var(--ACCENT-PINK-CLR);
  }
`;

export const Main = styled.main`
  display: flex;
`;

export const PageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1.5em;
  margin-left: var(--SIDE-NAVBAR-WIDTH);
  margin-top: var(--HEADER-HEIGHT);
  padding: 1em 1.5em;
`;

export const PageHeader = styled.div`
  align-items: center;
  display: flex;
  color: var(--LIGHT-GREY-CLR);
  justify-content: space-between;
`;

export const OrderCardsContainer = styled.div`
  align-items: center;
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(4, 1fr);
`;

export const SectionHeading = styled.p`
  color: var(--DARK-GREY-CLR);
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const LightGreySpan = styled.span`
  color: var(--LIGHT-GREY-CLR);
`;
export const DarkSpan = styled.span`
  color: var(--DARK-TEXT-CLR);
`;
export const DarkGreySpan = styled.span`
  color: var(--DARK-GREY-CLR);
`;

export const TextBtn = styled.button`
  color: var(--ACCENT-PINK-CLR);
  font-weight: 700;
  text-decoration: underline;
`;

export const Chip = styled.span<{ backgroundColor?: string }>`
  background: ${({ backgroundColor }) => backgroundColor || "#f4f7ff"};
  border-radius: 4px;
  color: ${({ color }) => color || "#485572"};
  margin: 0 5px;
  padding: 2px 5px;
`;

export const LightHorizontalLine = styled.div`
  background: #000;
  height: 1px;
  opacity: 0.2;
`;

export const LightVerticleLine = styled.div`
  background: #000;
  opacity: 0.2;
  width: 1px;
`;
