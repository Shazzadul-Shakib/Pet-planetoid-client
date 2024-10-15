import CreatePost from "@/components/feed/CreatePost";
import PostCard from "@/components/feed/PostCard";
import CreatePostModalCard from "@/components/modals/CreatePostModalCard";
import ModalBody from "@/components/modals/ModalBody";

const HomePage: React.FC = () => {
  return (
    <div className=" w-full mx-auto">
      <CreatePost/>
      <PostCard/>
      <PostCard/>
      <ModalBody modal={<CreatePostModalCard/>}/>
    </div>
  );
};

export default HomePage;