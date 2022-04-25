import * as React from "react";

import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

import config from "../config";

type Props = {
  name: string;
};

export const Header: React.FC<Props> = (props) => {
  // context, vars, and states
  const [readiness, setReadiness] = React.useState<boolean>(false);

  // helper funcs
  const funcLoadData = async () => {};

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
          <span>/{props.name}</span>
        </div>
        <div id="disconnect">
          <Link className="" to={`/`}>
            <Button colorScheme={"red"} size="sm" borderRadius={0}>
              Logout
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
