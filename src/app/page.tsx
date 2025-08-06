import { Image } from "@imagekit/next";
import { ImageKitProvider } from "@imagekit/next";

const Homepage = () => {
  return (
    <div className="">
      <Image src="general/post.jpeg" width={600} height={600} alt="cover" />
    </div>
  );
};

export default Homepage;
