import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="cursor-pointer text-orange-500" href="/">
        Return Home
      </Link>
    </div>
  );
}
