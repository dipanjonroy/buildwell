import ArticleCard from "./ArticleCard";

const articles = [
  {
    title:"5 Tips for a Successful Home Renovation",
    category:"Upgrades",
    featuredImage:"/articles/article-1.jpg",
    readTime:"5 min read",
    publishedDate:"18 July, 2026",
  },
  {
    title:"How to Choose the Right Contractor",
    category:"Safety",
    featuredImage:"/articles/article-2.jpg",
    readTime:"5 min read",
    publishedDate:"18 July, 2026",
  },
  {
    title:"Top Construction Trends for Modern Homes",
    category:"Cost  Guide",
    featuredImage:"/articles/article-3.jpg",
    readTime:"5 min read",
    publishedDate:"18 July, 2026",
  },
]

export default function FeaturedArticles() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {
        articles.map((article,idx)=>(
          <ArticleCard key={idx} article={article}/>
        ))
      }
    </div>
  );
}