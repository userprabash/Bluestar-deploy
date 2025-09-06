import Banner from "../Homecomponents/banner.jsx";
import Fprod from "../Homecomponents/firstproduct.jsx";
import Products from "../Homecomponents/Product.jsx";
import ReviewSlider from "../Homecomponents/ReviewSlider.jsx";
import Brandimg from "../Homecomponents/Brandimg.jsx";
import Slider from "../Homecomponents/Slider.jsx";
import Aboutus from "../Homecomponents/Testimonial.jsx";
import CategoriesTable from "../Homecomponents/Ourbrands.jsx";
import SEO from "../Component/SEO.jsx";

function Home() {
  return (
    <>
      <SEO
        title="Bluestar Surgical House | Premium Medical Equipment in Kathmandu"
        description="Bluestar Surgical House provides high-quality surgical instruments and medical equipment in Kathmandu, Nepal. Shop top brands and trusted medical products."
        url="https://bluestarsurgicalhouse.com.np/"
      />
      <Banner />
      {/* <CategoriesTable /> */}
      <Aboutus />
      {/* <Fprod /> */}
      <Products limit={16} />
      <ReviewSlider />
      <Brandimg />
      <Slider />
    </>
  );
}

export default Home;
