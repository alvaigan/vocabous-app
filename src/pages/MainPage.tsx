import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const MainPage = () => {
  const wordlist = [
    {
      word: "Object",
      desc: "A collection of key-value pairs enclosed in curly braces, where keys are strings and values can be various data types.",
    },
    {
      word: "Array",
      desc: "An ordered list of values enclosed in square brackets, where each element can be of any data type.",
    },
    {
      word: "Key",
      desc: "A string that acts as an identifier in a key-value pair, used to access corresponding values in an object.",
    },
    {
      word: "Value",
      desc: "The data assigned to a key in an object or as an element in an array. Can be strings, numbers, booleans, arrays, or objects.",
    },
    {
      word: "String",
      desc: "A sequence of characters enclosed in double quotes. Used to represent text in JSON.",
    },
    {
      word: "Number",
      desc: "A numeric data type in JSON that can represent integers or floating-point numbers.",
    },
    {
      word: "Boolean",
      desc: "A true/false value in JSON. Booleans are used to represent binary logic.",
    },
    {
      word: "Null",
      desc: "A special value in JSON that represents 'no value' or an empty value.",
    },
    {
      word: "Serialization",
      desc: "The process of converting data structures or objects into a JSON string for storage or transmission.",
    },
    {
      word: "Deserialization",
      desc: "The process of converting a JSON string back into a usable data structure, such as an object or array.",
    },
  ];

  return (
    <>
      <div className="h-full">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel className="w-2/4">
            <div className="flex flex-col gap-2 m-5">
              <Input placeholder="Type the word.." />
              <Textarea placeholder="Type the definition.." />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <div className="flex flex-col gap-2 m-5">
              <Input placeholder="Search.." />
              <div className="flex flex-col gap-2 overflow-y-auto">
                {wordlist.map((word) => (
                  <Card>
                    <div className="w-full flex flex-col p-2 rounded-lg">
                      <div className="p-2">
                        <span className="py-1 px-2 bg-gray-300 rounded-lg text-gray-600 text-xs">
                          {word.word}
                        </span>
                      </div>
                      <Separator />
                      <div className="p-2 text-xs">{word.desc}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default MainPage;
