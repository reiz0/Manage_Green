"use client";

import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    editorProps: {
      attributes: {
        class: "m-5 focus:outline-none h-full",
      },
    },
    content: "<p>Hello World! 🌎️</p>",
  });

  return (
    <div className="">
      <div
        className="border-2 rounded-md w-full h-[600px] overflow-y-scroll overflow-hidden"
        onClick={() => editor?.chain().focus()}
      >
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
