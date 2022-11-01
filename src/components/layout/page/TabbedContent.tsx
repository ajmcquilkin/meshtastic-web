import type React from "react";
import { Fragment } from "react";

import { Mono } from "@app/components/Mono";
import { Tab } from "@headlessui/react";

export interface TabType {
  name: string;
  icon?: JSX.Element;
  element: () => JSX.Element;
  disabled?: boolean;
  disabledMessage?: string;
}

export interface TabbedContentProps {
  tabs: TabType[];
  actions?: (() => JSX.Element)[];
}

export const TabbedContent = ({
  tabs,
  actions,
}: TabbedContentProps): JSX.Element => {
  return (
    <Tab.Group as="div" className="flex flex-grow flex-col gap-2 p-4">
      <Tab.List className="flex gap-4 border-b pb-3">
        {tabs.map((entry, index) => (
          <Tab key={index}>
            {({ selected }) => (
              <div
                className={`flex h-10 cursor-pointer gap-3 rounded-md px-3 text-sm font-medium ${selected
                  ? "bg-gray-100 dark:bg-zinc-600 text-gray-700 dark:text-zinc-200"
                  : "text-gray-500 dark:text-zinc-300 hover:text-gray-700 dark:hover:text-zinc-200"
                  }
                   `}
              >
                {entry.icon && (
                  <div className="m-auto text-slate-500 dark:text-zinc-300 dark:hover:text-zinc-200">{entry.icon}</div>
                )}
                <span className="m-auto">{entry.name}</span>
              </div>
            )}
          </Tab>
        ))}
        <div className="ml-auto flex gap-2">
          {actions?.map((Action, index) => (
            <Action key={index} />
          ))}
        </div>
      </Tab.List>
      <Tab.Panels as={Fragment}>
        {tabs.map((entry, index) => (
          <Tab.Panel key={index} className="flex flex-grow">
            {!entry.disabled ? (
              <entry.element />
            ) : (
              <Mono>{entry.disabledMessage}</Mono>
            )}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
