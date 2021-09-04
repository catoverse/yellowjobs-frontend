import ContentEmoji from './icons/categories/content.svg'
import DesignEmoji from './icons/categories/design.svg'
import ManagementEmoji from './icons/categories/management.svg'
import MarketingEmoji from './icons/categories/marketing.svg'
import SalesEmoji from './icons/categories/sales.svg'
import SupportEmoji from './icons/categories/support.svg'
import TechEmoji from './icons/categories/tech.svg'
import OthersEmoji from './icons/categories/others.svg'

export default ({ categoryName }) => {
  const categoryEmojis = {
    Content: ContentEmoji,
    Design: DesignEmoji,
    Management: ManagementEmoji,
    Marketing: MarketingEmoji,
    Sales: SalesEmoji,
    Support: SupportEmoji,
    Tech: TechEmoji,
    Others: OthersEmoji,
  }

  const CategoryEmoji = categoryEmojis[categoryName]
  return <CategoryEmoji />
}
