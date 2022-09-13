import { Helmet } from "react-helmet";
import Container from "../components/Container";
import GoHome from "../components/GoHome";
import { routes } from "../routes";
import { motion } from "framer-motion";
import { pageMotion } from "../page-motion";

const metadata = {
  "title": "Супутник ICEYE: що саме купив Притула і як воно допоможе ЗСУ",
  "description": "Супутник, про покупку якого повідомив Благодійний фонд Сергія Притули на зібрані українцями гроші, зможе знімати об'єкти на Землі за будь-якої погоди і у будь-який час доби.",
  "imageUrl": "https://novy.tv/wp-content/uploads/sites/96/2022/08/18.08_prytula_suputnyk-2.jpg",
  "webPageUrl": "folk-star-of-death.ua/about"
}

const About = () => {
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
            <h1>Про супутник</h1>
            <p>На відміну від оптичного супутника, який може працювати тільки вдень та у чистому небі, SAR супутник діє як ліхтар — він “підсвічує” поверхню землі власними радіохвилями. Тому для зйомки неважливі перешкоди, ніч, хмари, дощ, туман, задимленість. SAR супутник “пробиває” все своїми радіохвилями.</p>
            <p><strong>Періодичність прольотів</strong></p>
            <p>Супутник пролітає над нашою територією двічі на добу. Супутникові знімки території нашої країни отримує лише українська сторона як власник супутника, тому доступ є ексклюзивним. Коли супутник не летить над територією України, ми можемо отримувати дані завдяки доступу до сузір’я SAR супутників компанії ICEYE.Таким чином забезпечується безперервне отримання даних.</p>
            <p><strong>Роздільна здатність</strong></p>
            <p>Від 0,5 метра до 1 метра залежно від площі охоплення знімка. Один знімок може охоплювати площу до 225 квадратних кілометрів.</p>
            <p><strong>Швидкість отримання даних</strong></p>
            <p>Іноземні партнери дійсно забезпечують Україну супутниковими знімками, але із затримкою.</p>
            <p>Завдяки тому, що Україна викупила супутник, процес передачі даних від моменту знімка до моменту отримання його безпосередньо військовими підрозділами скорочується до кількох годин. За умов війни швидкість отримання інформації – це суттєва перевага.</p>
          </Container>
        </section>
      </main>
    </motion.div>
	)
}

export default About;