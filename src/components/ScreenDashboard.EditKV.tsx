import * as React from "react";
import { Link } from "react-router-dom";

import { useToast, Button, propNames } from "@chakra-ui/react";
import { Textarea, Input } from "@chakra-ui/react";
import icon from "../../public/icon.png";

import config from "../config";

type Props = {
  key?: string;
  value?: string;
  editable?: boolean;
  onBackClick?: () => void;
};

export const DashboardEditKV: React.FC<Props> = (props) => {
  // context, vars, and states
  const toast = useToast();
  const [readiness, setReadiness] = React.useState<boolean>(false);
  const [editable, setEditable] = React.useState<boolean>(false);
  const [exposed, setExposed] = React.useState<boolean>(false);
  const [key, setKey] = React.useState<string>("");
  const [value, setValue] = React.useState<string>("");

  // helper funcs
  const funcLoadData = async () => {
    if (!readiness) {
      setEditable(editable);
    }
    if (editable) {
      setExposed(true);
    }
    setReadiness(true);
  };
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
  }, [editable]);

  return (
    <>
      <div id="header" className="flex justify-between">
        <div id="title" className="text-2xl mb-2">
          <span className="font-semibold">
            <Link className="" to={`/`}>
              #mikv
            </Link>
          </span>
          <span>/editor</span>
        </div>
        <div id="disconnect">
          <Button colorScheme={"red"} size="sm" borderRadius={0}>
            Logout
          </Button>
        </div>
      </div>
      <div className="text-4xl font-bold mb-5">KV Entry Editor</div>
      <div id="form">
        <Input
          className={
            "mb-2 font-mono text-slate-600" +
            (!editable ? " cursor-default" : "")
          }
          borderRadius={0}
          value={key}
          readOnly={!editable}
          onChange={(e) => setKey(e.target.value)}
          placeholder="enter a passphrase"
        />
        <Textarea
          className={
            "mb-2 font-mono text-slate-600" +
            (!editable ? " cursor-pointer" : "")
          }
          borderRadius={0}
          value={exposed ? value : value.replace(/./g, "∙")}
          readOnly={!editable}
          onChange={(e) => setValue(e.target.value)}
          placeholder="type your secrets here"
        />

        <div className="flex justify-between">
          <Link to={`/dashboard`}>
            <Button size="lg" borderRadius={0} onClick={props.onBackClick}>
              Back
            </Button>
          </Link>
          <div>
            {!editable ? (
              <Button
                size="lg"
                disabled={editable}
                borderRadius={0}
                onClick={() => {
                  setExposed(!exposed);
                }}
              >
                {exposed ? "Hide" : "View"}
              </Button>
            ) : (
              <span />
            )}
            {editable ? (
              <Button
                colorScheme={"red"}
                size="lg"
                borderRadius={0}
                onClick={() => {
                  setEditable(!editable);
                }}
              >
                Cancel
              </Button>
            ) : (
              <span />
            )}
            <Button
              colorScheme={editable ? "green" : "telegram"}
              size="lg"
              borderRadius={0}
              onClick={() => {
                setEditable(!editable);
              }}
            >
              {editable ? "Save" : "Edit"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
