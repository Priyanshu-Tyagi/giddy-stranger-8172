import HowTo from "../components/Blog/HowTo";
import LatestPosts from "../components/Blog/LatestPosts";
import MyTabs from "../components/Blog/MyTabs";
import SearchBar from "../components/Blog/SearchBar";
import StartNow2 from "../components/Blog/StartNow2";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Blog() {
  return (
    <div>
      <Navbar/>
      <br />
      <br />
      <br />
      <SearchBar />
      <br />
      <br />
      <br />
      <HowTo />
      <br />
      <br />
      <br />
      <MyTabs />
      <br/>
      <LatestPosts />
      <br />
      <br />
      <br />
      <StartNow2 />
      <br />
      <br />
      <br />
      <Footer />
      <br />
      <br />
      <br />
    </div>
  );
}
