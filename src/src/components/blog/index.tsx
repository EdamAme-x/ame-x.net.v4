"use client";

import { useEffect, useState } from "react";
import { rpc } from "@/backend";
import { hc } from "hono/client";
import { ExternalLink, HeartIcon, RssIcon } from "lucide-react";
import { Post } from "@/backend/types";
import { Badge } from "../ui/badge";

export function BlogListView() {
	return (
		<div id="blog" className="w-full flex flex-col justify-center items-center mt-10">
			<h2 className="text-3xl font-bold text-gradient inline-flex gap-x-1 items-center">
				<RssIcon width={24} height={24} />
				Blog
			</h2>
			<Posts />
		</div>
	);
}

function Posts() {
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		const client = hc<rpc>(window.location.origin);
		(async () => {
			const response = await client.api.posts.$get();
			const data = await response.json();

            if (data.message === "success") {
                setPosts(data.data);
            }else {
                alert("Server is down.")
            }
		})();
	}, []);

	return <div className="flex flex-wrap justify-center md:justify-between w-full px-5 md:px-10 gap-y-5 mt-5">
        {
            posts.map(post => <div key={post.id} className="flex flex-col border border-white/[0.2] rounded-md w-[90%] md:w-[40%] lg:w-[30%] bg-black">
                <div className="w-full h-[150px] rounded-t-md border border-white/[0.2] flex justify-center items-center">
                    <div className="absolute transform scale-[3.5]">{post.emoji}</div>
                    <Badge variant="outline" className="relative bottom-[35%] right-[35%]">{post.article_type}</Badge>
                    <a href={"https://zenn.dev" + post.path} target="_blank" className="relative bottom-[35%] left-[35%] p-2 rounded-full border bg-border/[0.1]">
                        <ExternalLink width={16} height={16} />
                    </a>
                </div>
                <div className="w-full h-1/2 py-3 px-4 flex flex-col justify-between">
                    <div className="text-md">{post.title.length > 40 ? post.title.substring(0, 35) + "..." : post.title}</div>
                    <div>
                        <span className="inline-flex gap-x-1 items-center text-sm"><HeartIcon width={16} height={16} />{post.liked_count}</span>
                    </div>
                </div>
            </div>)
        }
    </div>;
}
