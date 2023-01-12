import Featured from "../../components/featured/Featured.component"
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties.component"
import Header from "../../components/header/Header.component"
import Navbar from "../../components/navbar/Navbar.component"
import PropertyList from "../../components/propertyList/PropertyList.component"
import "./home.styles.css"

function Home() {
  return (
    <>
        <Navbar />      
        <Header />         
        <div className="homeContainer">
            <Featured />
            <h1 className="homeTitle">Browse by property type</h1>
            <PropertyList />
            <h1 className="homeTitle">Home guests love</h1>
            <FeaturedProperties />
        </div>
    </>
  )
}

export default Home