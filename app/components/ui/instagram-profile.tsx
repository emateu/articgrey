export function InstagramProfile() {
  const profileImages = [
    {
      id: 1,
      src: `/assets/ig/1.png`,
      alt: 'Fitness athlete in gym',
    },
    {
      id: 2,
      src: `/assets/ig/2.png`,
      alt: 'Couple running outdoors',
    },
    {
      id: 3,
      src: `/assets/ig/3.png`,
      alt: 'Protein bread with supplements',
    },
    {
      id: 4,
      src: `/assets/ig/4.png`,
      alt: 'Protein shake being poured',
    },
    {
      id: 5,
      src: `/assets/ig/5.png`,
      alt: 'Blueberry smoothie ingredients',
    },
    {
      id: 6,
      src: `/assets/ig/6.png`,
      alt: 'Protein powder and ingredients',
    },
    {
      id: 7,
      src: `/assets/ig/7.png`,
      alt: 'Oats in bag with measuring cup',
    },
    {
      id: 8,
      src: `/assets/ig/8.png`,
      alt: 'Protein shaker bottle',
    },
    {
      id: 9,
      src: `/assets/ig/9.png`,
      alt: 'Matcha powder on spoon',
    },
    {
      id: 10,
      src: `/assets/ig/10.png`,
      alt: 'Matcha dessert in bowl',
    },
  ];

  return (
    <div>
      <div className="max-w-xxl mx-auto">
        {/* Image Grid */}
        <div className="grid grid-cols-6 gap-4">
          <div className="sm:col-span-2 lg:col-span-2 flex-col space-y-4 bg-[#f6f6f5] flex justify-center items-center">
            <div className="flex items-center ">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-sm font-bold">Logo</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">@uncmfrt.com</h1>
              </div>
            </div>

            <div>
              <button className="w-full border border-black bg-white text-black rounded-md py-2 px-4 text-center">
                Follow Us on Instagram
              </button>
            </div>
          </div>

          {profileImages.map((image) => (
            <div
              key={image.id}
              className="aspect-square overflow-hidden rounded-md"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover bg-gray-200"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
