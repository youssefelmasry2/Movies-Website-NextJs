import Card from "./Card";

export default function Results({results}: {results: any}) {
  return (
    <div className="sm:grid sm:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 
    max-w-6xl mx-auto py-4">
      {
        results.map((result: any) => (
          <Card key={result.id} result={result} />
        ))



      }
    </div>
  )
}
