import * as React from "react";
import { Link } from "react-router-dom";

import { useToast } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { CheckCircleIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { IoSyncCircle } from "react-icons/io5";

import config from "../config";

type Props = {
  isSynced: boolean;
  keyname: string;
};

export const KVItem: React.FC<Props> = (props) => {
  // context, vars, and states
  const toast = useToast();
  const [readiness, setReadiness] = React.useState<boolean>(false);

  // helper funcs
  const funcLoadData = async () => {};
  const funcToast = async (
    mode: "info" | "warning" | "success" | "error",
    title: string,
    msg: string
  ) => {
    toast({
      title: title,
      description: msg,
      status: mode,
      duration: 3000,
      position: "top",
      isClosable: true,
    });
  };

  // effects
  React.useEffect(() => {
    funcLoadData();
  }, [readiness]);

  return (
    <>
      <Box className="border bg-white my-1 py-2 px-4 border-gray-200 text-gray-500 transition-colors hover:border-blue-400 overflow-hidden hover:text-blue-400 ">
        <div className="flex justify-between">
          <div className="flex content-center items-center">
            <Tooltip placement="left" label="synced" aria-label="synced">
              <CheckCircleIcon
                w={4}
                h={4}
                color={props.isSynced ? "#48BB78" : "#EDF2F7"}
                className="mr-5"
              />
            </Tooltip>
            <div className="align-middle text-sm font-mono">
              {props.keyname}
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};
