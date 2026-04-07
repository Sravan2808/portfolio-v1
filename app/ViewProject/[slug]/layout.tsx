import { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  return {
    title: `${slug} - Sravansurya`,
    description: `Explore the details of my project ${slug}. Discover its features, technologies used, and more insights about this project.`,
  };
}

export default function Layout({ children }: Props) {
  return <>{children}</>;
}
