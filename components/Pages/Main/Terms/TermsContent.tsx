"use client";

const TermsContent = () => {
  const sections = [
    {
      title: "1. Introduction",
      content:
        "Welcome to QuickHire. By accessing our platform, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern QuickHire's relationship with you in relation to this website.",
    },
    {
      title: "2. Use of License",
      content:
        "Permission is granted to temporarily download one copy of the materials (information or software) on QuickHire's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.",
    },
    {
      title: "3. Disclaimer",
      content:
        "The materials on QuickHire's website are provided on an 'as is' basis. QuickHire makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
    },
    {
      title: "4. Limitations",
      content:
        "In no event shall QuickHire or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on QuickHire's website.",
    },
    {
      title: "5. Accuracy of materials",
      content:
        "The materials appearing on QuickHire's website could include technical, typographical, or photographic errors. QuickHire does not warrant that any of the materials on its website are accurate, complete or current.",
    },
  ];

  return (
    <div className="font-epilogue bg-white min-h-screen pt-24 pb-10">
      <div className="container mx-auto px-4 md:px-16">
        <div className="mb-16">
          <h1 className="text-4xl font-black text-[#25324B] mb-4  tracking-tighter">
            Terms <span className="text-primary ">of Service</span>
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

export default TermsContent;
