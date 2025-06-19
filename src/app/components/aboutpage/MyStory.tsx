import { getArticleById } from "@/queries";
import Image from "next/image";

const MyStory = async () => {
  const articleId = "bc5613f5-46fc-4c8a-b31c-b15dc50c45ce";
  const article = await getArticleById(articleId);

  return (
    <>
      <div className="md:flex justify-center items-center gap-20 md:mb-60 md:mt-21">
        <div className="">
          <Image
            src={article.field_image.url}
            alt={article.title}
            width={1000}
            height={100}
            className="w-full h-full object-cover block rounded-xl"
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: article.body.processed }} className="leading-8 text-center mt-10" />
      </div>
    </>
  );
};

export default MyStory;
