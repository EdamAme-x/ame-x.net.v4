export type Post = {
	id: number;
	post_type: "Article";
	title: string;
	slug: string;
	comments_count: number;
	liked_count: number;
	body_letters_count: number;
	article_type: "tech" | "ida";
	emoji: string;
	is_suspending_private: false;
	published_at: string;
	body_updated_at: string;
	source_repo_updated_at: null;
	pinned: false;
	path: string;
	user: {
		id: number;
		username: string;
		name: string;
		avatar_small_url: string;
	};
	publication: unknown;
};
