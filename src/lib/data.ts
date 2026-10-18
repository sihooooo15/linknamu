export type Profile = { name: string; bio: string; avatar?: string };
export type LinkItem = { id: string; title: string; url: string; icon: string };

// DB 연결 전까지 사용하는 임시 데이터. 내 정보로 바꿔 쓰세요.
export const profile: Profile = {
  name: "김시호",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  avatar: "https://placehold.co/150x150/orange/white",
};

export const links: LinkItem[] = [
  { id: "blog", title: "블로그", url: "https://example.com/blog", icon: "📝" },
  { id: "github", title: "GitHub", url: "https://github.com", icon: "💻" },
  { id: "instagram", title: "Instagram", url: "https://instagram.com", icon: "📷" },
  { id: "youtube", title: "YouTube", url: "https://youtube.com", icon: "▶️" },
];
