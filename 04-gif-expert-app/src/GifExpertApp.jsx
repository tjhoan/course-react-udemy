import { useState } from 'react';
import { AddCategory2, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = newCategory => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory2 onNewCategory={value => onAddCategory(value)} />
      <ol>
        {categories.map(category => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
