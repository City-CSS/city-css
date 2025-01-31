import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "gmail",
  "dropbox",
  "hubspot",
  "whatsapp",
  "googledrive",
  "adobe",
  "android",
  "amazon",
  "appstore",
  "contactlesspayment",
  "googlegemini",
  "googlesheets",
  "libreofficewriter",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "mailchimp",
  "minutemailer",
  "jira",
  "paypal",
  "gitlab",
  "visualstudiocode",
  "teamviewer",
  "sonarqube",
  "figma",
];

export function IconCloud() {
  return (
    <div className="flex flex-col items-center justify-center py-24 bg-background text-white">
      <div className="mx-auto max-w-4xl text-center mb-4 px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          Develop skills in essential technologies{" "}
        </h2>
        <p className="mt-2 text-base md:text-lg text-gray-600 hidden md:block">
          In our sessions you will learn how to master industry specific
          technologies{" "}
        </p>
      </div>
      <div className="relative flex h-full w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] mx-auto items-center justify-center overflow-hidden rounded-lg px-6 sm:px-12 md:px-16 lg:px-20 pb-8">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
}
