const backendUrl = process.env.BACKEND_URL;

export async function generateMetadata({ params }) {
  const { id } = await params;

  const res = await fetch(`${ backendUrl }/api/posts/${ id }`);
  const data = await res.json();

  const { title, description } = data;

  return {
    title,
    description,
    // keywords: [...meta.tags],
  };
}

export default function PageLayout({ children }) {
  return <div className="page-layout">{ children }</div>;
}
