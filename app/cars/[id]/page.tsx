import CarDetail from './CarDetail';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
  ];
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function CarPage({ params }: PageProps) {
  const { id } = await params;
  return <CarDetail carId={id} />;
}