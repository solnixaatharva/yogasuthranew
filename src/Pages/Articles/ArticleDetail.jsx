import { useParams, Link } from "react-router-dom";
import { articles } from "../../data/articles";
import Aos from "aos";
import { useEffect } from "react";

const ArticleDetail = () => {
  const { slug } = useParams();
  useEffect(()=>{Aos.init({duration:600})},[])

  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Article not found</h2>
        <p>The article you are looking for does not exist.</p>
        <div className="mt-6">
          <Link to="/articles" className="text-brand underline">Back to articles</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 data-aos="fade-up" className="text-3xl font-extrabold text-brand mb-6">{article.title}</h1>

      <div data-aos="fade-up" className="mb-6 rounded overflow-hidden shadow-sm">
        <img src={article.image} alt={article.title} className="w-full h-64 object-cover" />
      </div>

      <div data-aos="fade-up" className="prose prose-neutral max-w-none text-neutral-800" dangerouslySetInnerHTML={{ __html: article.content }} />

      <div className="mt-8">
        <Link to="/articles" className="px-4 py-2 rounded bg-brand text-white">Back to Articles</Link>
      </div>
    </div>
  );
}

export default ArticleDetail;
