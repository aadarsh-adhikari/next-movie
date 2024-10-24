
const TopApi = async() => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API}&language=en-US&page=1`);
  const res = await data.json()
  return (
    <div>
       {res.results.map((r) => (
        <div key={r.id}>{r.title}</div>
      ))}
    </div>
  )
}

export default TopApi
