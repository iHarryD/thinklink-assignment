import {
  faBasketShopping,
  faCircleCheck,
  faCircleXmark,
  faPlusCircle,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Header,
  InventorySection,
  OrderCard,
  SalesSection,
  SideNavbar,
} from "./components";
import {
  Main,
  OrderCardsContainer,
  PageContentContainer,
  PageHeader,
  PrimaryBtn,
} from "./components/styled";

const orderCards = [
  {
    color: "#FFAA2C",
    count: 239,
    icon: faBasketShopping,
    title: "Open orders",
  },
  {
    color: "#2C67FF",
    count: 126,
    icon: faTruck,
    title: "Orders in transit",
  },
  {
    color: "#00CF3A",
    count: 1254,
    icon: faCircleCheck,
    title: "Fullfilled orders",
  },
  {
    color: "#FF1C1C",
    count: 35,
    icon: faCircleXmark,
    title: "Cancelled orders",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <SideNavbar />
        <PageContentContainer>
          <PageHeader>
            <h3>Overview</h3>
            <PrimaryBtn>
              <FontAwesomeIcon icon={faPlusCircle} /> Add new wine
            </PrimaryBtn>
          </PageHeader>
          <OrderCardsContainer>
            {orderCards.map(({ color, count, icon, title }) => (
              <OrderCard
                color={color}
                count={count}
                icon={icon}
                title={title}
              />
            ))}
          </OrderCardsContainer>
          <SalesSection />
          <InventorySection />
        </PageContentContainer>
      </Main>
    </div>
  );
}

export default App;
