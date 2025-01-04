import config from '@/app/shiso.config.json';
import { next } from '@umami/shiso/server';
import { Shiso } from '@umami/shiso';

const { generateMetadata, generateStaticParams, renderPage } = next('docs', config);

export { generateMetadata, generateStaticParams };

export default renderPage(props => {
  return <Shiso {...props} />;
});
