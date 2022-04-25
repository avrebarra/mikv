import * as React from "react";
import { Link } from "react-router-dom";

import { AtSignIcon } from "@chakra-ui/icons";
import { useToast, Button } from "@chakra-ui/react";
import { DashboardListKV } from "./ScreenDashboard.ListKV";
import { DashboardEditKV } from "./ScreenDashboard.EditKV";
import icon from "../../public/icon.png";

import config from "../config";

type Props = {};

export const Dashboard: React.FC<Props> = ({}) => {
  // context, vars, and states
  const toast = useToast();
  const [readiness, setReadiness] = React.useState<boolean>(false);
  const [targetedKV, setTargetedKV] = React.useState<boolean>(false);

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
      {/* display list */}
      {!targetedKV ? (
        <DashboardListKV
          onEntryClick={() => {
            setTargetedKV(true);
          }}
        />
      ) : (
        <div />
      )}

      {/* display editor */}
      {targetedKV ? (
        <DashboardEditKV
          onBackClick={() => {
            setTargetedKV(false);
          }}
        />
      ) : (
        <div />
      )}
    </>
  );
};
