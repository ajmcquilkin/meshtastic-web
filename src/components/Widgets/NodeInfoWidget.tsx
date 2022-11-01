import type React from "react";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import type { Protobuf } from "@meshtastic/meshtasticjs";

import { Card } from "../Card.js";
import { Dropdown } from "../Dropdown.js";

export interface NodeInfoWidgetProps {
  hardware: Protobuf.MyNodeInfo;
}

export const NodeInfoWidget = ({
  hardware,
}: NodeInfoWidgetProps): JSX.Element => {
  return (
    <Card className="flex-col">
      <Dropdown
        title="Information"
        icon={<InformationCircleIcon className="h-4" />}
      >
        <div className="flex flex-col gap-2 p-3">
          <dl className="mt-2 border-b border-gray-200 dark:border-gray-600">
            <div className="flex justify-between py-1 text-sm font-medium">
              <dt className="text-gray-500 dark:text-zinc-300">Firmware version</dt>
              <dd className="cursor-pointer whitespace-nowrap text-gray-900 dark:text-zinc-200 hover:text-orange-400 dark:hover:text-orange-500 hover:underline">
                {hardware.firmwareVersion}
              </dd>
            </div>
          </dl>
          <div className="flex justify-between py-1 text-sm font-medium">
            <dt className="text-gray-500 dark:text-zinc-300">Bitrate</dt>
            <dd className="whitespace-nowrap text-gray-900 dark:text-zinc-200">
              {hardware.bitrate.toFixed(2)}
              <span className="font-mono text-sm text-slate-500 dark:text-zinc-200">bps</span>
            </dd>
          </div>
        </div>
      </Dropdown>
    </Card>
  );
};
