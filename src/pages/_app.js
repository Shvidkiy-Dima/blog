import "../styles/global.css";
import { YMInitializer } from 'react-yandex-metrika';
import config from '../configs/main.json'

export default function App({ Component, pageProps }) {
  return (
  <Component >
    <YMInitializer accounts={[config.yandex_metrica.id]} options={{webvisor: true}} />
     {...pageProps} 
    </Component>
  )
}
