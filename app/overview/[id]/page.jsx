import Description from './des';
const OPage = async ({ params, searchParams }) => {
   const { id } = await params; 
  const type = (await searchParams).type; 
  return (
    <div>
      <Description params={{ id, type }} />
    </div>
  );
};

export default OPage;
