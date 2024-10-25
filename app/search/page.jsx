import Search from './../components/search/search';
const SearchPage = async ({ searchParams }) => {
  const query = (await searchParams).query || ''; 

  return (
    <div className='text-white m-1 lg:m-4'>
      <h2 className='text-2xl text-center'>Search results for {query}</h2>
      {query ? (
        <Search query={query} /> 
      ) : (
        <p>Please enter a search term.</p> 
      )}
    </div>
  );
};

export default SearchPage;
