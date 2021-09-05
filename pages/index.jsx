import { Box } from '@chakra-ui/react'
import { useState } from 'react'

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
    <Box>
      <ModalProvider>
        <RolesProvider>
          <Navbar />
          <OpenedCategoryProvider categories={categories}>
            <SelectedRolesProvider>
              <HeroSearch categories={categories} />
              <SelectedCategoriesProvider>
                <JobCategories categories={categories} />
                <TweetList />
                <CategoriesDrawer categories={categories} />
                <ScrollToTop />
                <CategoriesModal categories={categories} />
              </SelectedCategoriesProvider>
            </SelectedRolesProvider>
          </OpenedCategoryProvider>
        </RolesProvider>
      </ModalProvider>
      <Footer />
    </Box>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${API_URL}/api/categories`)
  const categories = await response.json()

  // Ordering categories to display
  const orderedCategoryNames = [
    'Tech',
    'Design',
    'Management',
    'Marketing',
    'Sales',
    'Content',
    'Support',
    'Others',
  ]
  const orderedCategories = []
  orderedCategoryNames.forEach((categoryName) => {
    orderedCategories.push(
      categories.find((category) => category.category === categoryName)
    )
  })
  return {
    props: { categories: orderedCategories },
  }
}
