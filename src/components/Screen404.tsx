import * as React from "react";
import { Link } from "react-router-dom";

import { useToast, Button } from "@chakra-ui/react";

import config from "../config";

type Props = {};

export const NotFound404: React.FC<Props> = ({}) => {
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
      <div className="text-3xl font-bold mb-2">404 Ouch</div>
      <div className="text-2xl ">Can't seem to find those things.</div>
      <br />
      <div>
        <Link to={`/`}>
          <Button colorScheme={"gray"} size="md" borderRadius={0}>
            Back to Home
          </Button>
        </Link>
      </div>
    </>
  );
};
