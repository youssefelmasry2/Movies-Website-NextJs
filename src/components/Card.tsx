import Link from "next/link";
import Image from "next/image";
import { AiTwotoneLike } from "react-icons/ai";

interface CardProps {
  result: {
    id: number;
    title?: string;
    name?: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    release_date?: string;
    first_air_date?: string;
    // add more properties as needed
  };
}

export default function Card({ result }: CardProps) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 
    transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
     
        <Image
          src={`https://image.tmdb.org/t/p/original/${result.poster_path || result.backdrop_path}`}
          width={500}
          height={500}
          alt={result.title || result.name || "Image"}
          className="sm:rounded-t-lg group-hover:opacity-75 transition duration-200"
        />
        <div className="">
            <p className="line-clamp-2">{result.overview}</p>
            <h2 className="text-lg font-bold">{result.title || result.name}</h2>
            <p className="flex items-center">
                {result.release_date || result.first_air_date}
                <AiTwotoneLike className="h-5 mr-1 ml-3 "/>

            </p>
        </div>
      </Link>
    </div>
  );
}
