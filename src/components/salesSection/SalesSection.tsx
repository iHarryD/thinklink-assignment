import { faChevronDown, faSync } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ActiveFilter,
  GraphContainer,
  GraphHeader,
  Growth,
  HeaderTitle,
  HorizontalFlexCentered,
  LightGreySpan,
  LightHorizontalLine,
  LightVerticleLine,
  ProfitContainer,
  SalesDetailsContainer,
  SalesFilter as Filter,
  SalesOverviewContainer,
  SalesSectionHeader as Header,
  SectionHeading,
  SummarySidebar,
  TotalCount,
  TotalSales,
} from "../styled";

const data = [
  { day: "Mon", sales: 1000 },
  { day: "Tue", sales: 5000 },
  { day: "Wen", sales: 7000 },
  { day: "Thu", sales: 8500 },
  { day: "Fri", sales: 8300 },
  { day: "Sat", sales: 50000 },
];

export function SalesSection() {
  return (
    <section>
      <SectionHeading>Sales</SectionHeading>
      <SalesDetailsContainer>
        <Header>
          <div>
            <HeaderTitle>Total Sales Overview</HeaderTitle>
            <p>7 - 13 Aug, 2020</p>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faSync} /> Refresh Metrics
            </span>
            <Filter>
              <span>Filter by |</span>
              <ActiveFilter>
                This week <FontAwesomeIcon icon={faChevronDown} />
              </ActiveFilter>
            </Filter>
          </div>
        </Header>
        <LightHorizontalLine />
        <SalesOverviewContainer>
          <GraphContainer>
            <GraphHeader>
              <div>
                <TotalSales>$74,729.00</TotalSales>
                <Growth>+23% from last week</Growth>
              </div>
              <span>Highest revenue since 2 weeks ago</span>
            </GraphHeader>
            <HorizontalFlexCentered>
              <LineChart
                width={600}
                height={300}
                data={data}
                margin={{ top: 50, bottom: 50 }}
              >
                <Line type="monotone" dataKey="sales" stroke="#2FCA72" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </HorizontalFlexCentered>
          </GraphContainer>
          <LightVerticleLine />
          <SummarySidebar>
            <ProfitContainer>
              <LightGreySpan>Total Profit</LightGreySpan>
              <TotalCount color="#811434">$12,545.00</TotalCount>
              <Growth>+23% from last week</Growth>
            </ProfitContainer>
            <div>
              <LightGreySpan>Total Products Sold</LightGreySpan>
              <TotalCount>329</TotalCount>
            </div>
          </SummarySidebar>
        </SalesOverviewContainer>
      </SalesDetailsContainer>
    </section>
  );
}
