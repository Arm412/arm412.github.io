import React from "react";
import { PortfolioItemProps } from "../../helpers/helpers";
import IconListItem from "../IconListItem/IconListItem";

type PortfolioFeature = {
  title: string;
  details: string[];
  media?: {
    type: "image" | "video";
    src: string;
    alt?: string;
  }[];
};

const defaultFeatures: PortfolioFeature[] = [
  {
    title: "Feature 1",
    details: ["This is a dummy detail for feature 1.", "Another detail for feature 1."],
    media: [
      {
        type: "video",
        src: "/videos/PokemonListFeatures.m4v",
        alt: "Pitt"
      }
    ]
  },
  {
    title: "Feature 2",
    details: ["This is a dummy detail for feature 2.", "Another detail for feature 2."],
  },
];

export default function PortfolioItem({
  projectName = "Dummy Project",
  features = defaultFeatures,
  programmingLanguages = [
    { name: "Typescript", icon: "/icons/typescript-96.png" }
  ] }: PortfolioItemProps) {
  return (
    <>
      <div className="p-6 w-full">
        <h2 className="flex justify-center text-textMain text-2xl font-bold mb-6 font-mono">{projectName}</h2>
        <div className="flex flex-col gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 pb-8"
            >
              <div className={`${feature.media ? "md:w-1/2" : "md:w-full"} w-full`}>
                <h3 className="text-xl font-semibold text-secondary mb-5 font-mono">{feature.title}</h3>
                <ul className="list-disc list-inside space-y-5 text-textMain">
                  {feature.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              {feature.media && (
                <div className="md:w-1/2 w-full flex flex-wrap justify-center items-center gap-4">
                  {feature.media.map((mediaItem, mediaIndx) => (
                    mediaItem.type === "image" ? (
                      <img
                        key={mediaIndx}
                        src={mediaItem.src}
                        alt={mediaItem.alt || feature.title}
                        className="rounded-lg shadow-md max-w-full max-h-[500px] object-contain"
                      />
                    ) : (
                      <video
                        key={mediaIndx}
                        src={mediaItem.src}
                        controls
                        className="rounded-lg shadow-md max-w-full max-h-[500px] object-contain"
                      />
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-secondary mt-8 mb-4 font-mono">Technologies Used:</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {programmingLanguages.map((lang, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <IconListItem icon={lang.icon} name={lang.name} key={idx} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
