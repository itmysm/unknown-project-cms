export default async function BlogDetails({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <>
      <div className="text-5xl ">{slug}</div>
    </>
  );
}
