import * as React from "react";
import { Link } from "react-router-dom";

import { useToast, Button, propNames } from "@chakra-ui/react";
import { Textarea, Input } from "@chakra-ui/react";
import { Header } from "./BlockHeader";

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
      <Header name="editor" />
      <div className="text-4xl font-bold mb-4">KV Entry Editor</div>
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
