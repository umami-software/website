import config from '@/app/shiso.config.json';
import { next } from '@umami/shiso/server';
import { Shiso } from '@umami/shiso';
import PageHeader from '@/components/PageHeader';

const { generateMetadata, generateStaticParams, renderPage } = next('blog', config);

export { generateMetadata, generateStaticParams };

export default renderPage(props => {
  return (
    <>
      {Array.isArray(props?.content) && (
        <PageHeader
          title="Blog"
          description="Sharing our thoughts on analytics, marketing and open source"
        />
      )}
      <Shiso {...props} />
    </>
  );
});
