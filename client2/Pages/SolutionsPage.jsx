import { SolutionsPageBanner } from '../Data/BannerData'
import Banner from '../Components/Banner'
import SolutionsType from '../Components/SolutionsType'

export default function SolutionsPage() {
    return (
        <div>
            <Banner data={SolutionsPageBanner} />
            <SolutionsType/>
        </div>
    )
}
