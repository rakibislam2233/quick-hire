"use client";

const PrivacyContent = () => {
  const sections = [
    {
      title: "1. Data Collection",
      content:
        "We collect information from you when you register on our site, place an order, subscribe to our newsletter or fill out a form. When ordering or registering on our site, as appropriate, you may be asked to enter your name, e-mail address, mailing address or phone number.",
    },
    {
      title: "2. Information Usage",
      content:
        "Any of the information we collect from you may be used in one of the following ways: to personalize your experience, to improve our website, to improve customer service, and to process transactions.",
    },
    {
      title: "3. Information Protection",
      content:
        "We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.",
    },
    {
      title: "4. Cookies",
      content:
        "We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.",
    },
  ];

  return (
    <div className="font-epilogue bg-white min-h-screen pt-24 pb-10">
      <div className="container mx-auto px-4 md:px-16">
        <div className="mb-16">
          <h1 className="text-4xl font-black text-[#25324B] mb-4  tracking-tighter">
            Privacy <span className="text-primary ">Policy</span>
          </h1>
          <p className="text-gray-400 font-medium">
            Last updated: February 28, 2024
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-[#25324B] mb-4">
                {section.title}
              </h2>
              <p className="text-gray-500 leading-relaxed font-medium">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyContent;
