import config from '@/app/shiso.config.json';
import { next } from '@umami/shiso/server';
import { Shiso } from '@umami/shiso';
import SearchDocs from '@/components/SearchDocs';

const { generateMetadata, generateStaticParams, renderPage } = next('docs', config);

export { generateMetadata, generateStaticParams };

export default renderPage(props => {
  return (
    <main className="docs">
      <SearchDocs navigation={props.config.docs.navigation} />
      <Shiso {...props} className="docs" />
    </main>
  );
});
