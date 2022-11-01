import type React from "react";

import { Combobox } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import type { Group } from "./Index.js";

export interface GroupViewProps {
  group: Group;
}

export const GroupView = ({ group }: GroupViewProps): JSX.Element => {
  return (
    <Combobox.Option
      value={group.name}
      className={({ active }) =>
        `flex cursor-default select-none items-center rounded-md px-3 py-2 ${active ? "bg-gray-900 dark:bg-zinc-700 bg-opacity-5 text-gray-900 dark:text-gray-300" : ""
        }`
      }
    >
      {({ active }) => (
        <>
          <group.icon
            className={`h-6 w-6 flex-none text-gray-900 dark:text-gray-300 text-opacity-40 ${active ? "text-opacity-100" : ""
              }`}
          />
          <span className="ml-3 flex-auto truncate">{group.name}</span>
          {active && <ChevronRightIcon className="h-5 text-gray-400 dark:text-gray-500" />}
        </>
      )}
    </Combobox.Option>
  );
};
