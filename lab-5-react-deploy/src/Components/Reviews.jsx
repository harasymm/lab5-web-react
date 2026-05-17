import { useEffect, useState } from "react";

function Reviews({ theme }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/3/comments')
            .then(response => response.json())
            .then((data) => {
                setComments(data);
            })
            .catch((error) => {
                console.error('Error fetching comments:', error);
            });
    }, []);

    return (
         <section className="">
      <h2 className={
              theme === "dark"
                ? "text-blue-300 border-b-2 border-blue-150 pb-[6px] mt-5 mb-5"
                : "text-[#1d3d72] border-b-2 border-[#1d3d72]/10 pb-[6px] mt-5 mb-5"
            }>Reviews from previous employers / Відгуки попередніх роботодавців </h2>

      <div className=" justify-center gap-4 bg-[#f3f0fb] p-5 rounded-xl shadow mb--">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="w-[180mm] bg-[#f3f6fb] text-black p-4 rounded-xl shadow mb-5 border-l-4 border-[#1d3d72]"
          >
            <h3 className="font-bold mb-2 text-[#1d3d72] ">{comment.name}</h3>
            <p className="text-sm mb-2">{comment.body}</p>
            <p className="text-sm text-gray-600">{comment.email}</p>
          </div>
        ))}
      </div>
    </section>
        
    );
}

export default Reviews; 
