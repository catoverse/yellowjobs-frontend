import { Box } from '@chakra-ui/react'
import { useState } from 'react'

import Navbar from 'components/navbar'
import HeroSearch from 'components/hero-search'
import JobCategories from 'components/job-categories'
import TweetList from 'components/tweet-list'
import ScrollToTop from 'components/scroll-to-top'
import CategoriesModal from 'components/categories-modal'

import { ModalProvider } from 'contexts/modal-context'
import { RolesProvider } from 'contexts/roles-context'

import { API_URL } from 'lib/api'

export default function Home({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState('Tech')
  const selectedCategoryObject = categories.filter(
    (item) => item.category === selectedCategory
  )

  return (
    <Box mb="10rem">
      <ModalProvider>
        <RolesProvider>
          <Navbar />
          <HeroSearch />
          <JobCategories setSelectedCategory={setSelectedCategory} />
          <TweetList />
          <ScrollToTop />
          <CategoriesModal selectedCategory={selectedCategoryObject} />
        </RolesProvider>
      </ModalProvider>
    </Box>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${API_URL}/api/categories`)
  const categories = await response.json()

  return {
    props: { categories },
  }
}
