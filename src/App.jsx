
import { Suspense } from "react";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import OrderContainer from "./components/OrderContainer";
import States from "./components/States";
const loadOrders = () => fetch("/orders.json").then((res) => res.json());


const App= () => {
  const ticketPromise = loadOrders();
  return (
    <>
      <header className="w-11/12 mx-auto py-3">
        <Navbar />
      </header>
      <section>
      <Suspense fallback={"Loading..."}>
       <OrderContainer promise={ticketPromise}></OrderContainer>
       </Suspense>
      </section>
      
     
    </>
  );
}
export default App;