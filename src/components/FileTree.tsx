import { File, Folder, Tree } from "@/components/magicui/file-tree";

export function FileTreeDemo() {
  return (
    <div className="relative bg-white">
      <div
        className="absolute z-0 inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#c11c2f] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] md:w-[50rem] lg:w-[60rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="relative z-10 flex items-center justify-center mt-12">
        <div className="relative flex flex-col overflow-hidden rounded-lg  p-8">
          <div className="mx-auto max-w-4xl lg:max-w-2xl md:max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Our Modules Over the Year
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Join our Computer Science Society and dive deep into the world of
              software engineering!
            </p>
          </div>
          <div className="flex justify-center mt-8 w-full">
            <Tree
              className="p-4 overflow-auto  border border-gray-300 rounded-lg max-w-full"
              initialSelectedId="7"
              initialExpandedItems={["1", "2", "5", "6", "10"]}
              elements={ELEMENTS}
            >
              <Folder element="Computer Science Society" value="1">
                <Folder value="2" element="Software Engineering">
                  <File value="3">
                    <p>Session 1: Introduction to Git</p>
                  </File>
                  <File value="4">
                    <p>Session 2: Branching, merging and collaboration</p>
                  </File>
                  <File value="4">
                    <p>
                      Session 3: Adcanced git features and history management
                    </p>
                  </File>
                  <File value="4">
                    <p>Session 4: Lets write some code</p>
                  </File>
                </Folder>
                <Folder value="5" element="AI & ML">
                  <File value="7">
                    <p>Coming soon :)</p>
                  </File>
                </Folder>
                <Folder value="10" element="BlockChain">
                  <File value="11">
                    <p>Coming soon :)</p>
                  </File>
                </Folder>
              </Folder>
            </Tree>
          </div>
        </div>
      </div>
    </div>
  );
}

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "Computer Science Society",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "app",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "layout.tsx",
          },
          {
            id: "4",
            isSelectable: true,
            name: "page.tsx",
          },
        ],
      },
      {
        id: "5",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "6",
            isSelectable: true,
            name: "ui",
            children: [
              {
                id: "7",
                isSelectable: true,
                name: "button.tsx",
              },
            ],
          },
          {
            id: "8",
            isSelectable: true,
            name: "header.tsx",
          },
          {
            id: "9",
            isSelectable: true,
            name: "footer.tsx",
          },
        ],
      },
      {
        id: "10",
        isSelectable: true,
        name: "lib",
        children: [
          {
            id: "11",
            isSelectable: true,
            name: "utils.ts",
          },
        ],
      },
    ],
  },
];
