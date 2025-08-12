import Feed from "@/components/Feed";
import NavBar from "@/components/NavBar";
import PostComposer from "@/components/PostComposer";

const Homepage = () => {
  return (
    <div className="bg-black min-h-screen">
      <NavBar />
      <PostComposer />
      <Feed />
    </div>
  );
};

export default Homepage;
