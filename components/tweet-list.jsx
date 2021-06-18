import CategoryBasedTweets from 'components/category-based-tweets'

export default function TweetList() {
  const categories = [
    'Tech',
    'Design',
    'Management',
    'Marketing',
    'Sales',
    'Content',
    'Support',
    'Others',
  ]
  return (
    <>
      {categories.map((category, idx) => (
        <CategoryBasedTweets
          key={idx}
          category={category}
          isLightGray={idx % 2 === 0}
        />
      ))}
    </>
  )
}
