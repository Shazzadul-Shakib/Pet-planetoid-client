import CreatePost from "@/components/feed/CreatePost";
import PostCard from "@/components/feed/PostCard";

const HomePage: React.FC = () => {
  return (
    <div className=" w-full mx-auto">
      <CreatePost/>
      <PostCard/>
      <PostCard/>
    </div>
  );
};

export default HomePage;