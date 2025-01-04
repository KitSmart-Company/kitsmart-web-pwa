"use client";

import React, { useEffect } from "react";
import { Api } from "@/shared/services/api-client";
import { IStory } from "@/shared/services/stories";
import { Container } from "./container";
import { cn } from "@/shared/lib/utils";
import { X } from "lucide-react";
import ReactStories from "react-insta-stories";

interface Props {
  className?: string;
}

export const Stories: React.FC<Props> = ({ className }) => {
  const [stories, setStories] = React.useState<IStory[]>([]);
  const [open, setOpen] = React.useState(false);
  const [selectedStory, setSelectedStory] = React.useState<IStory>();
  const [viewedStoryIds, setViewedStoryIds] = React.useState<Set<string>>(new Set());

  useEffect(() => {
    async function fetchStories() {
      const data = await Api.stories.getAll();
      setStories(data);
    }
    fetchStories();
  }, []);

  useEffect(() => {
    if (open) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [open]);

  const onClickStory = (story: IStory) => {
    setSelectedStory(story);
    setViewedStoryIds((prev) => new Set(prev).add(String(story.id)));
    if (story.items.length > 0) {
      setOpen(true); // Ensure this line is present to open the modal
    }
  };

  return (
      <>
        <Container className={cn("flex items-center justify-between gap-2 my-10 mx-10", className)}>
          <div className="flex overflow-x-auto gap-4 py-4 scrollbar-hide">
            {stories.length === 0 &&
                [...Array(6)].map((_, index) => (
                    <div key={index} className="w-[200px] h-[250px] bg-gray-200 rounded-md animate-pulse" />
                ))}
            {stories.map((story) => (
                <img
                    loading="lazy"
                    key={story.id}
                    onClick={() => onClickStory(story)}
                    className={cn(
                        "rounded-md cursor-pointer border-2 border-[#7C3AED] p-[3px] flex-shrink-0",
                        viewedStoryIds.has(String(story.id)) ? "opacity-50" : ""
                    )}
                    height={250}
                    width={200}
                    src={story.previewImageUrl}
                />
            ))}
          </div>
        </Container>
        {open && (
            <div className="fixed left-0 top-0 w-full h-full flex items-center justify-center z-30">
              <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-xl"
                  style={{
                    backgroundImage: `url(${selectedStory?.items[0]?.sourceUrl})`,
                    filter: "blur(20px)",
                    transform: "scale(1.1)",
                  }}
              />
              <div className="absolute inset-0 bg-black opacity-30" />
              <div className="relative" style={{ width: 520 }}>
                <button className="absolute -right-10 -top-5 z-30" onClick={() => setOpen(false)}>
                  <X className="absolute top-0 right-0 w-8 h-8 text-white/50" />
                </button>
                <ReactStories
                    onAllStoriesEnd={() => setOpen(false)}
                    stories={selectedStory?.items.map((item) => ({ url: item.sourceUrl })) || []}
                    defaultInterval={3000}
                    width={520}
                    height={800}
                />
              </div>
            </div>
        )}
      </>
  );
};
