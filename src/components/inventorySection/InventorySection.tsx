import { InventoryItem } from "../inventoryItem/InventoryItem";
import {
  Checkbox,
  InventoryTable as Table,
  InventoryTableHead as TableHead,
  SectionHeading as Header,
  TableHeadCell,
  TableHeadRow,
} from "../styled";

const allProducts = [
  {
    cost: "$71.95",
    description: "Chianti · Blends and Other",
    latestRating: "RP 95",
    price: "$72.95",
    quantity: 32,
    title: "Bibi Graetz Testamatta Tos...",
    totalRatingCount: 3,
    vintage: "2015",
    volumn: "Magnum (1500 mL)",
  },
  {
    cost: "$79.95",
    description: "France · Sauternes",
    latestRating: "RP 95",
    price: "$92.95",
    quantity: 32,
    title: "K Vintners Syrah Cattle king",
    totalRatingCount: 25,
    vintage: "2015",
    volumn: "Magnum (1500 mL)",
  },
  {
    additionalDetails: {
      ratings: [
        { by: "James Suckling's", rating: "JS 95" },
        { by: "Robert Parker", rating: "RP 80" },
        { by: "Antonio Gallonis", rating: "---" },
        { by: "Wine Spectator Tasting", rating: "WS 79" },
      ],
      stocks: [
        { name: "Possimus", units: 43 },
        { name: "Downtown Condo", units: 95 },
      ],
    },
    cost: "$56.95",
    description: "United States · California · Blends",
    latestRating: "RP 95",
    price: "$59.95",
    quantity: 4,
    title: "Staglin Family Vineyard...",
    totalRatingCount: 3,
    vintage: "2010",
    volumn: "Odd Ball (5000 mL)",
  },
];

export function InventorySection() {
  return (
    <section>
      <Header>Inventory</Header>
      <Table>
        <TableHead>
          <TableHeadRow>
            <TableHeadCell>
              <Checkbox type="checkbox" />
            </TableHeadCell>
            <TableHeadCell>Product</TableHeadCell>
            <TableHeadCell>Rating</TableHeadCell>
            <TableHeadCell>Vintage</TableHeadCell>
            <TableHeadCell>Qty</TableHeadCell>
            <TableHeadCell>Volumn</TableHeadCell>
            <TableHeadCell>Cost</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
          </TableHeadRow>
        </TableHead>
        <tbody>
          {allProducts.map(
            ({
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
            }) => (
              <InventoryItem
                additionalDetails={additionalDetails || undefined}
                key={title}
                cost={cost}
                description={description}
                latestRating={latestRating}
                price={price}
                title={title}
                vintage={vintage}
                quantity={quantity}
                volumn={volumn}
                totalRatingCount={totalRatingCount}
              />
            )
          )}
        </tbody>
      </Table>
    </section>
  );
}
