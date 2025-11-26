import { ArrowBigRight } from "lucide-react";
import Link from "next/link";

export default function ExploreBtn() {
  return (
    <Link
      href={"/events"}
      className="cool-btn"
    >
      Explore Events
      <ArrowBigRight size={22} />
    </Link>
  )
}
