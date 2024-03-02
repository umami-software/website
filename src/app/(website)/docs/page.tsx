import page from './v2/[id]/page';

export default function () {
  return page({ params: { id: 'intro' } });
}
