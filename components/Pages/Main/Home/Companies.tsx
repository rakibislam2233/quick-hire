import Image from "next/image";

const Companies = () => {
  const companies = [
    {
      name: "Vodafone",
      logo: "/asset/brand/vodafone.png",
      width: 154,
      height: 32,
    },
    { name: "Intel", logo: "/asset/brand/intel.png", width: 88, height: 35 },
    { name: "Tesla", logo: "/asset/brand/tesla.png", width: 144, height: 20 },
    { name: "AMD", logo: "/asset/brand/amd.png", width: 106, height: 24 },
    { name: "Talkit", logo: "/asset/brand/talkit.png", width: 104, height: 32 },
  ];

  return (
    <section className="w-full bg-white py-12 border-b border-gray-100">
      <div className="w-full container px-5 md:px-16 mx-auto">
        <h1 className="text-base mb-8 text-[#202430]/50 font-epilogue">
          Companies we helped grow
        </h1>
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-8 md:gap-12 lg:gap-16">
          {companies.map((company) => (
            <div
              key={company.name}
              className={`relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 w-24 md:w-auto h-8 flex items-center justify-center`}
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className="object-contain max-h-full max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
