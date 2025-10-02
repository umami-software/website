import config from '@/app/shiso.config.json';
import { next } from '@umami/shiso/server';
import { Shiso } from '@umami/shiso';
import PageHeader from '@/components/PageHeader';

const { generateMetadata, generateStaticParams, renderCollection } = next('blog', config);

export { generateMetadata, generateStaticParams };

export default renderCollection(props => {
  return (
    <>
      <PageHeader
        title="Blog"
        description="Sharing our thoughts on analytics and marketing"
      />
      <Shiso {...props} />
    </>
  );
});
