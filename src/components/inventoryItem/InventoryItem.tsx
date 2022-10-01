import {
  Checkbox,
  ChevronIcon,
  Chip,
  ChipTitle,
  DarkSpan,
  ExpandedInventoryItemContainer as ExpandedContainer,
  ExpandedItemDetails,
  ExpandedItemTitle,
  ItemImage as Image,
  ItemMetaDetails as Decription,
  ItemPrice as Price,
  ItemRegionVintageContainer,
  ItemStatsContainer,
  ItemStatsType,
  ItemTitle as Title,
  ItemUtilities,
  LightGreySpan,
  LightHorizontalLine,
  ProductTitleImageContainer,
  StatChipsContainer,
  StyledInventoryItem,
  TableBodyCell,
  TextBtn,
} from "../styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  Dispatch,
  SetStateAction,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

interface Rating {
  by: string;
  rating: string;
}

interface Stock {
  name: string;
  units: number;
}

interface AdditionalItemDetails {
  ratings: Rating[];
  stocks: Stock[];
}

interface Item {
  additionalDetails?: AdditionalItemDetails;
  cost: string;
  description: string;
  latestRating: string;
  price: string;
  quantity: number;
  title: string;
  totalRatingCount: number;
  vintage: string;
  volumn: string;
}

export function InventoryItem({
  additionalDetails,
  cost,
  description,
  latestRating,
  price,
  quantity,
  title,
  totalRatingCount,
  vintage,
  volumn,
}: Item) {
  const [paddingBottom, setPaddingBottom] = useState(0);
  return (
    <StyledInventoryItem paddingBottom={paddingBottom}>
      <TableBodyCell>
        <Checkbox type="checkbox" />
      </TableBodyCell>
      <ProductTitleImageContainer>
        <Image />
        <div>
          <Title>{title}</Title>
          <Decription>{description}</Decription>
        </div>
      </ProductTitleImageContainer>
      <TableBodyCell>
        <Chip>{latestRating}</Chip>
        <Chip>+{totalRatingCount}</Chip>
      </TableBodyCell>
      <TableBodyCell>{vintage}</TableBodyCell>
      <TableBodyCell>{quantity}</TableBodyCell>
      <TableBodyCell>{volumn}</TableBodyCell>
      <TableBodyCell>{cost}</TableBodyCell>
      <Price>{price}</Price>
      <ChevronIcon>
        <FontAwesomeIcon icon={faChevronDown} />
      </ChevronIcon>
      {additionalDetails && (
        <ExpandedInventoryItem
          heightStateSetter={setPaddingBottom}
          title={title}
          region={description}
          vintage={vintage}
          ratings={additionalDetails.ratings}
          stocks={additionalDetails.stocks}
        />
      )}
    </StyledInventoryItem>
  );
}

interface ExpandedItem {
  heightStateSetter?: Dispatch<SetStateAction<number>>;
  ratings: Rating[];
  region: string;
  stocks: Stock[];
  title: string;
  vintage: string;
}

export function ExpandedInventoryItem({
  heightStateSetter,
  title,
  region,
  vintage,
  ratings,
  stocks,
}: ExpandedItem) {
  const containerRef = useRef<HTMLTableDataCellElement | null>(null);

  useLayoutEffect(() => {
    if (containerRef.current && heightStateSetter) {
      heightStateSetter(containerRef.current.clientHeight);
      console.log(containerRef.current.clientHeight);
    }
  }, [heightStateSetter]);

  return (
    <ExpandedContainer ref={containerRef}>
      <ExpandedItemDetails>
        <div>
          <ExpandedItemTitle>{title}</ExpandedItemTitle>
          <ItemRegionVintageContainer>
            <span>
              <DarkSpan>Region: </DarkSpan>
              <LightGreySpan>{region}</LightGreySpan>
            </span>
            <span>
              <DarkSpan>Vintage: </DarkSpan>
              <LightGreySpan>{vintage}</LightGreySpan>
            </span>
          </ItemRegionVintageContainer>
        </div>
        <ItemUtilities>
          <TextBtn>View wine</TextBtn>
          <FontAwesomeIcon icon={faEdit} />
          <FontAwesomeIcon icon={faTrash} />
        </ItemUtilities>
      </ExpandedItemDetails>
      <LightHorizontalLine />
      <ItemStatsContainer>
        <div>
          <ItemStatsType>Rating</ItemStatsType>
          <StatChipsContainer>
            {ratings.map(({ by, rating }) => (
              <div key={by}>
                <ChipTitle>{by}</ChipTitle>
                <Chip>{rating}</Chip>
              </div>
            ))}
          </StatChipsContainer>
        </div>
        <div>
          <ItemStatsType>Stock</ItemStatsType>
          <StatChipsContainer>
            {stocks.map(({ name, units }) => (
              <div key={name}>
                <ChipTitle>{name}</ChipTitle>
                <Chip backgroundColor="#FFF2EE" color="#811434">
                  {units}
                </Chip>
              </div>
            ))}
          </StatChipsContainer>
        </div>
      </ItemStatsContainer>
    </ExpandedContainer>
  );
}
