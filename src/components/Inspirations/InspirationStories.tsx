import InspirationRow from "./InspirationRow";

export interface InspirationStory {
  heading: string;
  country: string;
  category: string;
  copy: string;
  image: string;
  buttonLabel: string;
  href: string;
  reverse: boolean;
}

export default function InspirationStories({
  stories,
}: {
  stories: InspirationStory[];
}) {
  return (
    <>
      {stories.map((story) => (
        <InspirationRow key={story.country} {...story} />
      ))}
    </>
  );
}