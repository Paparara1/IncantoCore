import ExplorationDetailPage from '../[slug]/page';

export default function Page() {
  return <ExplorationDetailPage params={Promise.resolve({ slug: 'edge-intelligence' })} />;
}
