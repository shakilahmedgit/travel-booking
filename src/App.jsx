import Booking from "./components/Booking";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {

  return (
    <div className="bg-[url(./assets/banner.jpg)] bg-cover bg-no-repeat h-screen">
      <Header/>
      <section>
        <Booking />
        <Table />
      </section>
    </div>
  )
}

export default App
