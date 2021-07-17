import { Box } from '@chakra-ui/react'

import Navbar from 'components/navbar'
import HeroSearch from 'components/hero-search'
import JobCategories from 'components/job-categories'
import TweetList from 'components/tweet-list'
import ScrollToTop from 'components/scroll-to-top'
import CategoriesModal from 'components/categories-modal'
import { ModalProvider } from 'contexts/modal-context'
import { useState } from 'react'
import { RolesProvider } from 'contexts/roles-context'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Tech')

  return (
    <Box mb="10rem">
      <ModalProvider>
        <RolesProvider>
          <Navbar />
          <HeroSearch />
          <JobCategories setSelectedCategory={setSelectedCategory} />
          <TweetList />
          <ScrollToTop />
          <CategoriesModal selectedCategory={selectedCategory} />
        </RolesProvider>
      </ModalProvider>
    </Box>
  )
}
