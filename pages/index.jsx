import { Box, Flex } from '@chakra-ui/react'

import Navbar from 'components/navbar'
import Footer from 'components/footer'
import HeroSearch from 'components/hero-search'
import JobCategories from 'components/job-categories'
import TweetList from 'components/tweet-list'
import ScrollToTop from 'components/scroll-to-top'
import CategoriesDrawer from 'components/categories-drawer'
import CategoriesModal from 'components/categories-modal'

import { ModalProvider } from 'contexts/modal-context'
import { RolesProvider } from 'contexts/roles-context'
import { OpenedCategoryProvider } from 'contexts/opened-category-context'
import { SelectedCategoriesProvider } from 'contexts/selected-categories-context'
import { SelectedRolesProvider } from 'contexts/selected-roles-context'

import { API_URL } from 'lib/api'

export default function Home({ categories }) {
  return (
    <Flex direction="column" h="100vh">
      <ModalProvider>
        <RolesProvider>
          <Navbar />
          <OpenedCategoryProvider categories={categories}>
            <SelectedRolesProvider>
              <Box flex="1">
                <HeroSearch categories={categories} />
                <SelectedCategoriesProvider>
                  <JobCategories categories={categories} />
                  <TweetList />
                  <CategoriesDrawer categories={categories} />
                  <ScrollToTop />
                  <CategoriesModal categories={categories} />
                </SelectedCategoriesProvider>
              </Box>
            </SelectedRolesProvider>
          </OpenedCategoryProvider>
        </RolesProvider>
      </ModalProvider>
      <Footer />
    </Flex>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${API_URL}/api/categories`)
  const categories = await response.json()

  return {
    props: { categories },
  }
}
