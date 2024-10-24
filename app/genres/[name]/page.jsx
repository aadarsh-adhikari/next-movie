import Gcard from './card';
const GenrePage = async({params , searchParams}) => {
  const resolvedParams = await params; 
  const name = decodeURIComponent(resolvedParams.name);
  const { type, id } = await searchParams; 

  return (
    <div>
      <Gcard params={{ name, type,id }} />
    </div>
  )
}

export default GenrePage

