import Content from './Content';

export default async function ({ params }: { params: { id: string } }) {
  return <Content id={params.id} />;
}
