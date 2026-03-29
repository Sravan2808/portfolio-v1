"use client";
import ArrowIcon from "@/components/ArrowIcon";
import Blog from "@/components/Blog";

const Blogs = () => {
  return (
    <div className="px-5 py-3 mt-3 mb-5 flex flex-col gap-2 rounded-lg">
      <h1 className="font-bold text-2xl mb-3">Blogs</h1>
      <Blog
        arr={["Node.js", "React", "JavaScript"]}
        title="How to Send Emails in Node.js Using Nodemailer"
        publishedDate="March 15, 2026"
        url="https://medium.com/@sravansurya/how-to-send-emails-in-node-js-using-nodemailer-8b1dd48e871a"
      />
      <Blog
        arr={["Node.js", "Redis", "Jwt", "Backend Development"]}
        title="How I Solved JWT Logout Security Using Redis Token Blacklisting"
        publishedDate="March 25, 2026"
        url="https://medium.com/@sravansurya/how-i-solved-jwt-logout-security-using-redis-token-blacklisting-24377e81d4fe"
      />
      <div className="border w-fit mx-auto mt-2 border-stone-700 rounded-lg flex p-px ">
        <div className="text-center flex items-center justify-center">
          <div className="w-fit flex items-start gap-1 border-2 px-3 py-1 bg-[#d1ccc2]/90 text-foreground border-gray-600 rounded-lg cursor-pointer hover:bg-[#d1ccc2] transition-all duration-300">
            View All <ArrowIcon rotate={-33} color="var(--foreground)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
