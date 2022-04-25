import * as React from "react";
import { Link } from "react-router-dom";

import { AtSignIcon } from "@chakra-ui/icons";
import { useToast, Button } from "@chakra-ui/react";
import { KVItem } from "./BlockKVItem";
import icon from "../../public/icon.png";

import config from "../config";

type Props = {
  onEntryClick?: () => void;
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
      <div id="header" className="flex justify-between">
        <div id="title" className="text-2xl mb-2">
          <span className="font-semibold">
            <Link className="" to={`/`}>
              #mikv
            </Link>
          </span>
          <span>/dashboard</span>
        </div>
        <div id="disconnect">
          <Button colorScheme={"red"} size="sm" borderRadius={0}>
            Logout
          </Button>
        </div>
      </div>
      <div className="text-4xl font-bold mb-5">
        My Keys & <br /> Values
      </div>
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
              <KVItem isSynced={false} keyname={e} />
            </div>
          );
        })}
      </div>
    </>
  );
};
