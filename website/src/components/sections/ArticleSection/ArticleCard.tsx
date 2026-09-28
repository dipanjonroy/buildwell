import Image from "next/image";
import Link from "next/link";

type ArticleCardProp = {
  title: string;
  category: string;
  featuredImage: string;
  readTime: string;
  publishedDate: string;
};

export default function ArticleCard({ article }: { article: ArticleCardProp }) {
  return (
    <Link href="/" className="block group">
      <div className="relative w-full h-100 xl:h-140 rounded-2xl overflow-hidden bg-red-700">
        {/* Article image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-120"
          />

          <span className="absolute inset-0 black-bg opacity-30" />
        </div>

        {/* Article info */}
        <div className="relative w-full h-full p-8">
          <div className="h-full flex flex-col justify-between white-text">
            <div className="flex justify-between">
              <span>{article.category}</span>
              <span>{article.readTime}</span>
            </div>

            <div>
              <span className="text-sm">{article.publishedDate}</span>
              <h3 className="heading font-bold text-2xl leading-tight mt-4">
                {article.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
