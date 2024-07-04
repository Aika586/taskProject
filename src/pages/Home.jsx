import NewHeader from "../components/newHeader/NewHeader";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <NewHeader/>
      <h1>{t('home')}</h1>
    
    </div>
  );
};

export default Home;
