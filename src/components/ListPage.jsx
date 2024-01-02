import React from 'react';
import Post from './Post';

const ListPage = ({ searchResults }) => {
  const results = searchResults.map((post) => <Post key={post.id} post={post} />);

  const content =
    results.length >= 0 ? (
      <main className="grid grid-cols-4 overflow-hidden h-screen gap-6">{results}</main>
    ) : null;

  return content;
};

export default ListPage;
