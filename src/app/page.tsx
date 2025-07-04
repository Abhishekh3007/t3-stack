const Mockurls = [
  "https://d5dzw8t48q.ufs.sh/f/JTJrt4GHPsydGhVxPFddAIiecuy5Xg3W1n4N7tpYsVvQRfxM",
  "https://d5dzw8t48q.ufs.sh/f/JTJrt4GHPsydVCsdPdqJZdckyFj3qPuoL5bBwEfrWG8x2HYn",
  "https://d5dzw8t48q.ufs.sh/f/JTJrt4GHPsydVgEbDuqJZdckyFj3qPuoL5bBwEfrWG8x2HYn",
  "https://d5dzw8t48q.ufs.sh/f/JTJrt4GHPsydVgEbDuqJZdckyFj3qPuoL5bBwEfrWG8x2HYn",
];
const Mockimages = Mockurls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">
        {[...Mockimages,...Mockimages,...Mockimages,].map((image) => (
          <div key={image.id} className="w-40 p-0">
            <img src={image.url} alt={`Image ${image.id}`}/>
          </div>
        ))}
      </div>
    </main>
  );
}