export default function Results({results}: {results: any}) {
  return (
    <div>
      {
        results.map((result: any) => (
          <div key={result.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} alt={result.original_title} />
            <h3>{result.original_title}</h3>
          </div>
        ))



      }
    </div>
  )
}
