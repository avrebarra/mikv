import * as React from "react";
import { Link } from "react-router-dom";

import { useToast, Button } from "@chakra-ui/react";
import { KVItem } from "./BlockKVItem";
import { Header } from "./BlockHeader";

import config from "../config";

type Props = {
  onEntryClick?: () => void;
  onCreateNewClick?: () => void;
};

export const DashboardListKV: React.FC<Props> = (props) => {
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
      <Header name="dashboard" />
      <div className="text-3xl font-bold mb-4">My Keys & Values</div>
      <div id="list">
        {[
          "PASSWORD_SATU",
          "PASSWORD_DUA",
          "PASSWORD_TIGA",
          "abcsd",
          "pesa",
        ].map((e) => {
          return (
            <div className="cursor-pointer mb-2" onClick={props.onEntryClick}>
              <KVItem isSynced={true} keyname={e} />
            </div>
          );
        })}
        <Button
          className="mb-2"
          colorScheme={"gray"}
          w={"full"}
          size="sm"
          borderRadius={0}
          onClick={() => {
            funcToast(
              "info",
              "No More Entries",
              "Cannot find anymore entries to fetch."
            );
          }}
        >
          Show More
        </Button>
        <Button
          className="mb-1"
          w={"full"}
          colorScheme={"telegram"}
          size="md"
          borderRadius={0}
          onClick={props.onCreateNewClick}
        >
          + Add new entry
        </Button>
      </div>
    </>
  );
};
