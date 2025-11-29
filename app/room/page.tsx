"use client";

import Editor from "@monaco-editor/react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { IconCheck, IconCopy, IconExplicitOff } from "@tabler/icons-react";
import { Code2, Group, MoveRightIcon, Pencil, Sparkle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ParticipantList } from "@/components/custom/ParticipantsList";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function CodeEditor() {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  return (
    <div className=" p-0 m-0 h-screen">
      <div className="max-w-[1300px]  mx-auto py-4">
        <div className="flex py-2  gap-2">
          <Card className="m-0 p-0 bg-black">
            <Editor
              width="950px"
              height="700px"
              className="p-1"
              defaultLanguage="javascript"
              defaultValue="// write your code here...\n"
              theme="vs-dark"
            />
          </Card>
          <div className="w-full flex flex-col gap-2">
            <Card className="p-4 m-0">
              <CardContent className="p-0 m-0">
                <span className="font-bold text-2xl text-[#181C14]">
                  CodeBros
                </span>
                <div className="flex mt-2 gap-2 items-center">
                  <InputGroup className=" w-[100px] bg-gray-100 h-[30px] p-0">
                    <InputGroupInput
                      className="px-2 m-0 text-sm"
                      placeholder="123456"
                      readOnly
                    />
                    <InputGroupAddon align="inline-end">
                      <InputGroupButton
                        aria-label="Copy"
                        title="Copy"
                        size="icon-xs"
                        onClick={() => {
                          copyToClipboard("123456");
                        }}
                      >
                        {copiedText ? (
                          <IconCheck size={6} />
                        ) : (
                          <IconCopy size={6} />
                        )}
                      </InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>
                  <div>
                    <Button size={"sm"} className="bg-red-500 hover:bg-red-600">
                      Leave Room <MoveRightIcon />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full h-fit p-4 pt-6 m-0">
              <CardContent className="p-0">
                <div className="flex items-center gap-2">
                  <Code2 />
                  <span className="text-lg font-semibold">Participants</span>
                </div>
                <ParticipantList />
              </CardContent>
            </Card>
            <Card className="w-full  h-fit p-4 pt-6 m-0">
              <CardContent className=" flex flex-col gap-2 p-0">
                <div className="">
                  <span className="font-medium">Ask AI</span>
                </div>
                <Textarea className="" />
                <Button className="w-full">
                  Ask AI <Sparkle />{" "}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
