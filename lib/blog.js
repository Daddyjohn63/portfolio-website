import { marked } from 'marked';
import qs from 'qs';

//not used yet. can also use for getting first three posts.
export async function getFeaturedPost() {
  const posts = await getBlogPosts();
  return posts[0];
}

const CMS_URL = 'http://localhost:1337';

//get single blog post
export async function getBlogPost(slug) {
  const url =
    `${CMS_URL}/api/posts?` +
    qs.stringify(
      {
        filters: { slug: { $eq: slug } },
        fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
        populate: { image: { fields: ['url'] } },
        pagination: { pageSize: 1, withCount: false }
      },
      { encodeValuesOnly: true }
    );
  //console.log('getBlogPost', url);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }
  const { data } = await response.json();
  const { attributes } = data[0];
  return {
    slug: attributes.slug,
    title: attributes.title,
    subtitle: attributes.subtitle,
    body: marked(attributes.body),
    date: attributes.publishedAt,
    image: CMS_URL + attributes.image.data.attributes.url
  };
}

//get all blog posts and their categories
//now calls strapi
export async function getBlogPosts() {
  const url =
    `${CMS_URL}/api/posts?` +
    qs.stringify(
      {
        //TODO: do I need 'subtitle'?
        fields: ['slug', 'title', 'subtitle', 'excerpt', 'publishedAt'],
        populate: {
          categories: {
            fields: ['title', 'slug'],
            sort: ['name:asc']
          },
          image: {
            fields: ['url']
          }
        },
        sort: ['publishedAt:desc'],
        pagination: { pageSize: 6 }
      },
      { encodeValuesOnly: true }
    );

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }
  const { data } = await response.json();
  return data.map(({ attributes }) => ({
    slug: attributes.slug,
    title: attributes.title,
    excerpt: attributes.excerpt,
    date: attributes.publishedAt,
    image: CMS_URL + attributes.image.data.attributes.url,
    categories: attributes.categories.data.map(cat => ({
      id: cat.id,
      title: cat.attributes.title,
      slug: cat.attributes.slug
    }))
  }));
}

export async function getCategoryPosts(slug) {
  const url =
    `${CMS_URL}/api/posts?` +
    qs.stringify(
      {
        fields: ['slug', 'title', 'excerpt', 'publishedAt'],
        populate: {
          categories: {
            fields: ['title', 'slug']
          },
          image: {
            fields: ['url']
          }
        },
        filters: {
          categories: {
            title: {
              $eq: slug
            }
          }
        },
        sort: ['publishedAt:desc'],
        pagination: { pageSize: 6 }
      },
      { encodeValuesOnly: true }
    );

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }
  const { data } = await response.json();
  return data.map(({ attributes }) => ({
    slug: attributes.slug,
    title: attributes.title,
    excerpt: attributes.excerpt,
    date: attributes.publishedAt,
    image: CMS_URL + attributes.image.data.attributes.url,
    categories: attributes.categories.data.map(cat => ({
      id: cat.id,
      title: cat.attributes.title,
      slug: cat.attributes.slug
    }))
  }));
}

//get category title

export async function getCategoryTitleBySlug(slug) {
  const query = qs.stringify(
    {
      fields: ['title'], // Only fetch the title
      filters: {
        slug: {
          $eq: slug // Filter by slug
        }
      }
    },
    {
      encodeValuesOnly: true // Encode URI components only
    }
  );

  const url = `${CMS_URL}/api/categories?${query}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`CMS returned ${response.status} for ${url}`);
    }
    const json = await response.json();

    // Assuming the response data is structured correctly and there is at least one category
    if (json.data.length > 0) {
      return json.data[0].attributes.title; // Return the title of the first category that matches the slug
    } else {
      return null; // No category found with that slug
    }
  } catch (error) {
    console.error('Failed to fetch category by slug:', error);
    return null;
  }
}

export async function getSlugs() {
  const url =
    `${CMS_URL}/api/posts?` +
    qs.stringify(
      {
        fields: ['slug'],
        sort: ['publishedAt:desc'],
        pagination: { pageSize: 100 }
      },
      { encodeValuesOnly: true }
    );

  //console.log('Fetching slugs from URL:', url); // Log the URL

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }
  const { data } = await response.json();
  //console.log('Response data:', data); // Log the fetched data

  return data.map(({ attributes }) => attributes.slug);
}
