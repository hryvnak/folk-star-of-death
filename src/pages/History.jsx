import { Helmet } from "react-helmet";
import GoHome from "../components/GoHome";
import Container from "../components/Container";
import image from '../assets/images/Керченський міст.jpg';
import { routes } from "../routes";
import { motion } from "framer-motion";
import { pageMotion } from "../page-motion";

const metadata = {
  "title": "Як українці задонатили на супутник",
  "description": "Угода реалізована за кошти українського народу, які вдалося зібрати в рамках загальнонаціонального проєкту \"Народний Байрактар\" 22-24 червня 2022 року фонду Притули спільно з блогером Ігорем Лаченковим.",
  "imageUrl": "https://novy.tv/wp-content/uploads/sites/96/2022/08/18.08_prytula_suputnyk-2.jpg",
  "webPageUrl": "folk-star-of-death.ua/about"
}

const History = () => {
  return (
    <motion.div 
      variants={ pageMotion }
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Helmet>
        <title>{ metadata.title }</title>
        <meta name="description" content={ metadata.description } />
        <meta property="og:title" content={ metadata.title } />
        <meta property="og:description" content={ metadata.description } />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={ metadata.webPageUrl } />
        <meta property="og:image" content={ metadata.imageUrl } />
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content={ metadata.title }/>
        <meta name="twitter:description" content={ metadata.description } />
        <meta name="twitter:site" content={ metadata.webPageUrl } />
        <meta name="twitter:image" content={ metadata.imageUrl } />
      </Helmet>
      <main>
        <section>
          <Container>
            <GoHome to={routes.home.path} name={routes.home.name} />
            <h1>Історія купівлі супутника</h1>
            <p>У червні українці за три дні зібрали 600 млн грн на купівлю трьох турецьких безпілотників Bayraktar-ТВ2. Збір коштів на кампанію "Народний байрактар" організував Фонд Сергія Притули.</p>
            <p>Турецька компанія Baykar вирішила надати українцям ці безпілотники безкоштовно, тому народним грошам довелося шукати інше застосування. Фонд Притули вступив у перемовини з Міністерством оборони, щоб максимально корисно витратити зібрані кошти.</p>
            <p>У соцмережах намагалися вгадати, що за них придбають. Найближчим до істини виявився варіант космічної станції "Зірка смерті". Гроші витратили на купівлю та оренду високотехнологічних розвідувальних супутників.</p>
            <p>Фонд Сергія Притули уклав контракт із фінською космічною компанією ICEYE. Україна отримає на понад рік безлімітний доступ до фотографій її 21 супутника та безстроково отримає повне управління одним із них.</p>
            <p>Послугу з передавання супутника компанія ICEYE описує як можливість самостійно організувати управління апаратом, спланувати місію та визначити ціль для збору інформації.</p>
            <p>Супутники ICEYE використовують технологію Synthetic aperture radar (SAR). Такі космічні апарати замість традиційної оптичної зйомки запускають на Землю радіолокаційні хвилі, а потім приймають сигнал, який відбивається від об’єктів.</p>
            <p>Головне управління розвідки (ГУР) матиме доступ до фотографій з усіх супутників компанії. Їх орбіти перетинаються, що збільшує кількість знімків. У фонді розповіли, що вся мережа супутників зможе робити близько 36 світлин на добу.</p>
            <p>У релізі щодо укладення угоди з Україною компанія опублікувала своє фото Керченського мосту – давньої цілі для ЗСУ.</p>
            <img src={image} alt="Керченський міст" width="690" height="388" />
          </Container>
        </section>
      </main>
    </motion.div>
  )
}

export default History;