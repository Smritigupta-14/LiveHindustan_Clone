import mockNews from '@/data/mockNews.json';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getNewsData() {
  // Simulate API call
  await delay(100);
  
  return {
    breaking: mockNews.breaking,
    topNews: mockNews.topNews,
    topStories: mockNews.topStories,
    cricket: mockNews.cricket,
    entertainment: mockNews.entertainment,
    religion: mockNews.religion,
    business: mockNews.business,
    viral: mockNews.viral,
  };
}

export async function getNewsByCategory(category) {
  await delay(100);
  return mockNews[category] || [];
}

export async function getArticleBySlug(slug) {

  console.log(slug);
  await delay(100);
  
  // Search in all categories
  const allArticles = [
    ...mockNews.topNews,
    ...mockNews.topStories,
    ...mockNews.cricket,
    ...mockNews.entertainment,
    ...mockNews.religion,
    ...mockNews.business,
    ...mockNews.viral,
    ...mockNews.horoscope
  ];
  
  const article = allArticles.find(article => article.slug === slug);
  
  // Add sample content if found
  if (article) {
    return {
      ...article,
      content: article.content || `यह ${article.title} की पूरी खबर है। इस विषय पर विस्तृत जानकारी यहाँ दी गई है।`,
      author: article.author || 'Live Hindustan ब्यूरो',
      imageCaption: article.imageCaption || '',
    };
  }
  
  return null;
}