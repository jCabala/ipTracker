import { InfoContainer, InfoCard } from './styles/Info.stled';
import { useDataState } from '../DataContext';

const Info = () => {
  const { data } = useDataState();

  return (
    <InfoContainer>
      {['IP Address', 'Location', 'Timezone', 'ISP'].map(e => (
        <InfoCard key={e}>
          <p>{e}</p>
          <h3>{data[e] || 'xxx'}</h3>
        </InfoCard>
      ))}
    </InfoContainer>
  );
};

export default Info;
