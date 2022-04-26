import * as React from "react";
import { Link } from "react-router-dom";

import { useToast, Button, propNames } from "@chakra-ui/react";
import { Textarea, Input } from "@chakra-ui/react";
import { Header } from "./BlockHeader";
import { Icon } from "@chakra-ui/icons";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";

import config from "../config";

type Props = {
  targetKVID?: string;
  onBackClick?: () => void;
};

export const DashboardEditor: React.FC<Props> = (props) => {
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
      if (props.targetKVID == "") {
        setEditable(true);
      }
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
      <div className="text-3xl font-bold mb-4">KV Entry Editor</div>
      <div id="form">
        <Input
          size={"sm"}
          className={
            "mb-2 font-mono text-slate-600" +
            (!editable ? " cursor-default" : "")
          }
          borderRadius={0}
          value={key}
          readOnly={!editable}
          onChange={(e) => setKey(e.target.value)}
          placeholder="TYPE_YOUR_ID_HERE"
        />
        <Textarea
          size={"sm"}
          className={
            "mb-3 font-mono text-slate-600" +
            (!editable ? " cursor-pointer" : "")
          }
          borderRadius={0}
          value={exposed ? value : value.replace(/./g, "∙")}
          readOnly={!editable}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Write the value of KV"
        />

        <div className="flex justify-between">
          <Link to={`/dashboard`}>
            <Button size="md" borderRadius={0} onClick={props.onBackClick}>
              Back
            </Button>
          </Link>
          <div>
            {/* buttons on view */}
            {!editable && props.targetKVID != "" ? (
              <div>
                <Button
                  id="view"
                  size="md"
                  colorScheme={exposed ? "yellow" : "gray"}
                  disabled={editable}
                  borderRadius={0}
                  onClick={() => {
                    setExposed(!exposed);
                  }}
                >
                  {exposed ? <Icon as={BsEyeSlash} /> : <Icon as={BsEye} />}
                </Button>

                <Button
                  id="delete"
                  size="md"
                  colorScheme={"red"}
                  borderRadius={0}
                >
                  <Icon as={RiDeleteBinFill} />
                </Button>

                <Button
                  id="edit"
                  colorScheme={editable ? "green" : "telegram"}
                  size="md"
                  borderRadius={0}
                  onClick={() => {
                    setEditable(!editable);
                  }}
                >
                  <Icon as={FiEdit} />
                </Button>
              </div>
            ) : (
              <span />
            )}

            {/* buttons on edit */}
            {editable && props.targetKVID != "" ? (
              <div>
                <Button
                  colorScheme={"red"}
                  size="md"
                  borderRadius={0}
                  onClick={() => {
                    setEditable(!editable);
                  }}
                  leftIcon={<Icon as={MdCancel} />}
                >
                  Cancel
                </Button>
                <Button
                  colorScheme={editable ? "green" : "telegram"}
                  size="md"
                  borderRadius={0}
                  onClick={() => {
                    setEditable(!editable);
                  }}
                  leftIcon={<Icon as={MdCheckCircle} />}
                >
                  Confirm
                </Button>
              </div>
            ) : (
              <span />
            )}

            {/* buttons on create new */}
            {props.targetKVID == "" ? (
              <Button
                colorScheme={editable ? "green" : "telegram"}
                size="md"
                borderRadius={0}
                onClick={() => {
                  funcToast(
                    "success",
                    "Success!",
                    "New key-value pairs succesfully created."
                  );
                }}
                leftIcon={<Icon as={MdCheckCircle} />}
              >
                Create KV
              </Button>
            ) : (
              <span />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
