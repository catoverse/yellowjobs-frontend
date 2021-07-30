import { Box } from '@chakra-ui/react'
import { useState } from 'react'

import Navbar from 'components/navbar'
import HeroSearch from 'components/hero-search'
import JobCategories from 'components/job-categories'
import TweetList from 'components/tweet-list'
import ScrollToTop from 'components/scroll-to-top'
import CategoriesDrawer from 'components/categories-drawer'
import CategoriesModal from 'components/categories-modal'

import { ModalProvider } from 'contexts/modal-context'
import { RolesProvider } from 'contexts/roles-context'
import { SelectedCategoryProvider } from 'contexts/selected-category-context'
import { SelectedRolesProvider } from 'contexts/selected-roles-context'

import { API_URL } from 'lib/api'

export default function Search({ categories }) {
  return (
    <Box mb="10rem">
      <ModalProvider>
        <RolesProvider>
          <Navbar />
          <HeroSearch categories={categories} />
          <SelectedCategoryProvider>
            <SelectedRolesProvider>
              <JobCategories categories={categories} />
              <TweetList />
              <CategoriesDrawer categories={categories} />
              <ScrollToTop />
              <CategoriesModal categories={categories} />
            </SelectedRolesProvider>
          </SelectedCategoryProvider>
        </RolesProvider>
      </ModalProvider>
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
    orderedCategories.push(categories.find((category) => category.category === categoryName))
  })
  return {
    props: { categories: orderedCategories },
  }
}
