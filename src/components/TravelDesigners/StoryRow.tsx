interface StoryRowProps {
  image: string;
  title: string;
  copy: string;
  reverse?: boolean; // true = text on left, image on right
}

export default function StoryRow({
  image,
  title,
  copy,
  reverse = false,
}: StoryRowProps) {
  return (
    <div className="max-w-[1180px] mx-auto px-8 py-14">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className={reverse ? "md:order-2" : "md:order-1"}>
          <div
            className="w-full aspect-[4/3] bg-cover bg-center"
            style={{ backgroundImage: `url('${image}')` }}
          />
        </div>
        <div className={reverse ? "md:order-1" : "md:order-2"}>
          <h3 className="font-heading italic font-light text-[30px] text-neutral-900 mb-4 leading-tight">
            {title}
          </h3>
          <p className="text-[14px] leading-[1.8] text-neutral-700 max-w-[400px]">
            {copy}
          </p>
        </div>
      </div>
    </div>
  );
}
