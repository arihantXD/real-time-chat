"use client";

import Editor from "@monaco-editor/react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { Code2, Group, Pencil } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function CodeEditor() {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  return (
    <div className="max-w-[1300px] mx-auto mt-4">
      <div>
        <span className="font-bold text-3xl">CodeBros</span>
        <InputGroup className="w-[200px] p-0 mt-2">
          <InputGroupInput
            className="p-2 m-0"
            placeholder="https://x.com/shadcn"
            readOnly
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              aria-label="Copy"
              title="Copy"
              size="icon-xs"
              onClick={() => {
                copyToClipboard("https://x.com/shadcn");
              }}
            >
              {copiedText ? <IconCheck /> : <IconCopy />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="flex  p-2 mt-4  gap-3.5 scroll-auto overflow-y-auto">
        <Card>
          <Editor
            width="950px"
            height="600px"
            defaultLanguage="javascript"
            defaultValue="// write your code here...\n"
            theme="vs-light"
          />
        </Card>

        <div className="flex items-center gap-2 h-fit">
          <Code2 />
          <span className="text-2xl font-semibold">Participants</span>
        </div>
      </div>
    </div>
  );
}
