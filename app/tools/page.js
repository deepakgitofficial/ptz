import Link from "next/link";
import { IoGridSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import BlogsData from "@/components/BlogsData";
export default function Page() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6  gap-8">
          <Link href="https://vyag-creator-hub.vercel.app/" target="_blank">
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4  flex items-center gap-4 bg-white dark:bg-gray-700 hover:shadow-lg transition-shadow">
              <div className="icon">
                <FaYoutube className="bg-primary px-1 rounded-sm" size={28} />
              </div>
              <div className="tool-name flex grow">
                Youtube Thumbnail Resizer
              </div>
            </div>
          </Link>

          <BlogsData />
        </div>
      </div>
    </section>
  );
}
