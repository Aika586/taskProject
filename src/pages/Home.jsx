import NewHeader from "../components/newHeader/NewHeader";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('home');
  return (
    <div>
      <NewHeader/>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
};

export default Home;
