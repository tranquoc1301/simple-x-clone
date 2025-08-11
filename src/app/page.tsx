import Feed from "@/components/Feed";
import Share from "@/components/Share";
import NavBar from "@/components/NavBar";

const Homepage = () => {
  return (
    <div className="bg-black min-h-screen">
      <NavBar />
      <Share />
      <Feed />
    </div>
  );
};

export default Homepage;
