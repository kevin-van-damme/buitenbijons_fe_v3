import { getArticleById } from "@/queries";
import Image from "next/image";

const MyStory = async () => {
  const articleId = "bc5613f5-46fc-4c8a-b31c-b15dc50c45ce";
  const article = await getArticleById(articleId);

  return (
    <>
      <div className="flex justify-between gap-20 my-40">
        <div className="">
          <Image
            src={article.field_image.url}
            alt={article.title}
            width={1000}
            height={100}
            className="w-full h-full object-cover block rounded-xl"
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: article.body.processed }} className="leading-8 text-center" />
      </div>
    </>
  );
};

export default MyStory;
