"use client";
import CreatePost from "@/components/feed/CreatePost";
import PostCard from "@/components/feed/PostCard";
import useToggle from "@/hooks/useToggle";
import CreatePostModalCard from "@/components/modals/CreatePostModalCard";
import ModalBody from "@/components/modals/ModalBody";

const HomePage: React.FC = () => {
  const [isCreatePostModalOpen, toggleCretePostModal] = useToggle();
  return (
    <div className="mx-auto w-full">
      <CreatePost toggle={toggleCretePostModal} />
      <PostCard />
      <PostCard />

      {isCreatePostModalOpen && (
        <ModalBody
          modal={<CreatePostModalCard toggle={toggleCretePostModal} />}
        />
      )}
    </div>
  );
};

export default HomePage;
