import Booking from "./components/Booking";
import Header from "./components/Header";

function App() {

  return (
    <div className="bg-[url(./assets/banner.jpg)] bg-cover bg-no-repeat h-screen">
      <Header/>
      <section>
        <Booking />
        <div>Table</div>
      </section>
    </div>
  )
}

export default App
