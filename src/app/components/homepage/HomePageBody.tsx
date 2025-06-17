import HomePageBanner from "./HomePageBanner";
import HomePageImage from "./HomePageImage";
import HomePagePopularSelection from "./HomePagePopularSelection";
import HomePageStyleSelection from "./HomePageStyleSelection";

const HomePageBody = () => {
  return (
    <div>
      <HomePageImage />
      <HomePageBanner />
      <HomePagePopularSelection />
      <HomePageStyleSelection />
    </div>
  );
};
export default HomePageBody;
