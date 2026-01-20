import { Button } from "@/components/ui/button";

const CreatePost = () => {
  return (
    <section className="dark:dark:bg-[#181A2A] dark:text-white flex justify-center items-center py-[30px] md:py-[80px]">
      <form className="flex flex-col gap-y-[30px] w-[80%] md:w-[500px]">
        <h1 className="text-[30px] md:text-[40px] mb-[10px]">
          Create New Post
        </h1>
        <label htmlFor="image" className="cursor-pointer">
          Create Image 🍟
        </label>
        <input type="file" id="image" hidden />
        <textarea
          placeholder="Create Post"
          className="dark:dark:bg-[#181A2A] dark:text-white w-full md:w-[500px] h-[200px] border-[2px] border-gray-600 resize-none p-[20px]"
        ></textarea>
        <Button
          type="submit"
          className="bg-blue-700 hover:bg-blue-500 dark:text-white"
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default CreatePost;
