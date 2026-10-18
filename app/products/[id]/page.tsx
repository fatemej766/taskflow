type ProductsProps = {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    page: string;
    category: string;
  }>;
};
const products = async ({ params, searchParams }: ProductsProps) => {
  const { id } = await params;
  const { page, category } = await searchParams;
  return (
    <>
      <h1>id is : {id}</h1>
      <p>page is {page ?? "1"}</p>
      <p>category is  {category ??""}</p>
    </>
  );
};

export default products;
