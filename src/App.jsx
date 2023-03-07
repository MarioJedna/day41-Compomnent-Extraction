import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ProductList from "./ProductList/ProductList";
import Search from "./Search/Search";

function App() {
  return (
    <div id="page">
      <Header />

      <div id="main">
        <Search />
        <ProductList />
      </div>

      <Footer />
    </div>
  );
}

export default App;
