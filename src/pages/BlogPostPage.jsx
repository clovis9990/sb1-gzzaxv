import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { format } from 'date-fns';

const blogPosts = {
  1: {
    id: 1,
    title: "A Poetic Warning: Road Safety in Buliisa District",
    content: `
      <p class="text-lg text-gray-700 mb-8">A powerful poem by Kiiza Wilson addressing the growing concern of road accidents in Buliisa District, following the introduction of tarmac roads. This piece reflects the community's voice and serves as both a lament and a warning.</p>

      <div class="prose prose-lg max-w-none">
        <div class="poem-content space-y-6">
          <p>We celebrated the arrival of the tarmac roads<br/>
          Little did we know that accident was her cousin<br/>
          We thought we were to cruise<br/>
          But you came to bruise<br/>
          And made our homes, grounds of soil mounds</p>

          <p>Of graves, a courtesy of your claim<br/>
          We grief, our sons and daughters<br/>
          Who come off the motorbikes<br/>
          Crashing onto the road surface<br/>
          Lucky ones leaving the scenes alive<br/>
          While others are gathered in pieces</p>

          <p>You have become a slaughter house<br/>
          With stains of blood spread across your lanes<br/>
          Like the Murchison Falls National Park, where others are shot dead<br/>
          Like the lake, where others drown<br/>
          People are dying so fast, without being nursed by their loved ones</p>

          <p>Survivors limp<br/>
          With broken limbs and skulls<br/>
          People weep<br/>
          They cannot believe, that they are just accidents</p>

          <p>The illiterates say, there is a cause<br/>
          That it is witchcraft, bulogo<br/>
          The elites say it is spiritual<br/>
          That it is fate, nchwamu gya Ruhanga</p>

          <p>I come to say<br/>
          Drive drinking is killing us<br/>
          Phones as we drive, ride or walk is a suicide<br/>
          That call and message can wait<br/>
          If not it maybe your last one to take<br/>
          Remove the headsets; there is no music in the grave.</p>

          <p>Boda bodas Riders<br/>
          Don't compete for the fastest ride<br/>
          Your life may be the price that you won't live to see.<br/>
          You would rather be late, than speed to become late.</p>
        </div>

        <div class="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">About the Poem</h2>
          <p>This poem captures the tragic impact of increased road accidents following the modernization of infrastructure in Buliisa District. It addresses various aspects of road safety, from drunk driving to the use of mobile phones while driving, and serves as a powerful reminder of the importance of responsible road use.</p>
          
          <h3 class="text-lg font-semibold mt-6 mb-2">Cultural Context</h3>
          <p>The poem incorporates local beliefs and terminology, such as "bulogo" (witchcraft) and "nchwamu gya Ruhanga" (fate), reflecting the community's various interpretations of these tragic events. It bridges traditional and modern perspectives on road safety.</p>
        </div>
      </div>
    `,
    date: "2024-01-12",
    author: "Kiiza Wilson",
    authorRole: "Community Poet",
    category: "Community",
    imageUrl: "/images/blog/buliisa-road.jpg",
    readTime: "4 min read"
  }
};

export default function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts[Number(id)];

  // Redirect to 404 page if post doesn't exist
  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span className="px-2 py-1 bg-primary-100 text-primary-800 rounded">
            {post.category}
          </span>
        </div>
        <h1 className="text-4xl font-display font-bold mb-6">{post.title}</h1>
        <div className="flex items-center gap-4">
          <img
            src={`/images/authors/${post.author.toLowerCase().replace(' ', '-')}.jpg`}
            alt={post.author}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="font-medium">{post.author}</div>
            <div className="text-sm text-gray-600">{post.authorRole}</div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative h-96 rounded-lg overflow-hidden mb-12">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <article>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      {/* Share and Tags */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-medium">Share:</span>
            <button className="text-gray-600 hover:text-primary-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </button>
            <button className="text-gray-600 hover:text-primary-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-3 3h2v2h-2V6zm-8 0h6v2H8V6zm10 12H6V9h12v9z"/>
              </svg>
            </button>
          </div>
          <button className="flex items-center gap-2 text-gray-600 hover:text-primary-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
            </svg>
            <span>Bookmark</span>
          </button>
        </div>
      </div>
    </div>
  );
}