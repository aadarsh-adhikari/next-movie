import Search from './../components/search/search';
const SearchPage = async ({ searchParams }) => {
  const query = (await searchParams).query || ''; 

  return (
    <div className='text-white'>
      <h2 className='text-2xl ml-2'>Search results for "{query}"</h2>
      {query ? (
        <Search query={query} /> 
      ) : (
        <p>Please enter a search term.</p> 
      )}
    </div>
  );
};

export default SearchPage;
