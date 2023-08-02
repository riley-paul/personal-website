import { CollectionEntry, getCollection } from "astro:content";
import Experience from "./Experience.jsx";

const experiences = (await getCollection("experience")).filter(
  (i) => !i.data.draft
);

const categories = [
  { id: "work", name: "Work" },
  { id: "school", name: "Education" },
  { id: "baja", name: "Baja SAE" },
];

const sortDates = (
  a: CollectionEntry<"experience">,
  b: CollectionEntry<"experience">
) => {
  const date_a = Date.parse(a.data.date_end || "2100-01");
  const date_b = Date.parse(b.data.date_end || "2100-01");
  return date_b - date_a;
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

export type Props = {};

export default function ExperienceTabs(props: Props) {
  return (
    <Tabs defaultValue="work" className="w-full">
      <TabsList className={`grid w-full grid-cols-3`}>
        {categories.map((category) => (
          <TabsTrigger key={category.id} value={category.id}>
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {categories.map((category) => (
        <TabsContent key={category.id} value={category.id}>
          <Card>
            {experiences
              .filter((exp) => exp.data.category === category.id)
              .sort(sortDates)
              .map((exp) => (
                <Experience key={exp.id} experience={exp}></Experience>
              ))}
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}

// <div id="tab-wrapper" x-data="{tab: 0}" class="border-2 rounded my-1">
//   <!-- tabs navigation -->
//   <div
//     class="flex m-0 cursor-pointer overflow-x-scroll no-scrollbar border-b-2 items-center"
//   >
//     {
//       categories.map((category, index) => (
//         <div
//           x-bind:class={`{'invert': tab === ${index}}`}
//           x-on:click={`tab = ${index}`}
//           class="py-2 px-4 flex-grow mt-0 text-lg text-center"
//         >
//           {category.name}
//         </div>
//       ))
//     }
//   </div>

//   <!-- tabs content -->
//   {
//     categories.map((category, index) => (
//       <div
//         x-show={`tab === ${index}`}
//         class="p-5 prose prose-invert prose-sm max-w-none prose-headings:my-0 prose-li:my-0 prose-p:my-0 prose-ul:my-0 prose-h2:mt-4 prose-em:font-normal"
//       >
//         {
//           experiences
//             .filter(experience => experience.data.category === category.id)
//             .sort(sortDates)
//             .map(experience => <Experience {experience} />)
//         }
//       </div>
//     ))
//   }
// </div>
