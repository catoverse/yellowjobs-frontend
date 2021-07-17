import { Box, Center, Spinner } from '@chakra-ui/react'
import { useState } from 'react'

import Navbar from 'components/navbar'
import HeroSearch from 'components/hero-search'
import JobCategories from 'components/job-categories'
import TweetList from 'components/tweet-list'
import ScrollToTop from 'components/scroll-to-top'
import CategoriesModal from 'components/categories-modal'

import { ModalProvider } from 'contexts/modal-context'
import { RolesProvider } from 'contexts/roles-context'

import { API_URL, fetcher } from 'lib/api'
import useSWR from 'swr'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Tech')
  const { data, error } = useSWR(`${API_URL}/api/categories`, fetcher)

  if (error) return <div>failed to load</div>
  if (!data)
    return (
      <Center minH="100vh">
        <Spinner />
      </Center>
    )
  const selectedCategoryObject = data.filter(
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
