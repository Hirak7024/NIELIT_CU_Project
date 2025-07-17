import Solutions from '../Components/Solutions'
import Quotes from '../Components/Quotes'
import Reviews from '../Components/Reviews'
import YoutubeVideoSection from '../Components/YoutubeVideoSection'
import ChatBotMain from '../Components/ChatBot/ChatBotMain'
import { HomePageBanner } from '../Data/BannerData'
import Banner from '../Components/Banner'

export default function HomePage() {
    return (
        <div>
            <Banner data={HomePageBanner}/>
            <Solutions/>
            <Quotes/>
            <Reviews/>
            <YoutubeVideoSection/>
            <ChatBotMain/>
        </div>
    )
}
