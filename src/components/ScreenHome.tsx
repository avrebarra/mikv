import * as React from "react";
import { Link } from "react-router-dom";

import { useToast, Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaGoogleDrive } from "react-icons/fa";
import icon from "../../public/icon.png";

import config from "../config";

type Props = {};

export const Home: React.FC<Props> = ({}) => {
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
      <div className="">
        <div className="mb-3 mt-20">
          <img className="w-32 inline-block justify-center" src={icon} alt="" />
        </div>
        <div className="font-bold mb-1 text-5xl">
          <Link className="" to={`/`}>
            #mikv
          </Link>
        </div>
        <div className="text-2xl mb-4">
          <div>Your personal key-value store app.</div>
        </div>
        <div>
          <Link to={`/dashboard`}>
            <Button
              colorScheme={"telegram"}
              size="md"
              borderRadius={0}
              leftIcon={<Icon as={FaGoogleDrive} />}
            >
              Connect to Google Drive
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
