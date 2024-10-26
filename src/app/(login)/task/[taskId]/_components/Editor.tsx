"use client";

import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { FaBold, FaItalic, FaStrikethrough, FaUnderline } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";

export const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    editorProps: {
      attributes: {
        class: "focus:outline-none h-full prose [&_p]:m-1",
      },
    },
    content: "<p>Hello World! 🌎️</p>",
  });

  
  if (!editor) {
    return (
      <div className="border-2 rounded-md w-full h-[600px] overflow-y-scroll overflow-hidden " />
    );
  }

  const edditorButtonClass = "p-1 text-3xl rounded-md"
  const activeClass = `bg-slate-200 ${edditorButtonClass}`;

  return (
    <div className="">
      <div className="flex gap-1 items-center py-1">
        <FaBold
          className={editor.isActive("bold") ? activeClass : edditorButtonClass }
          onClick={() => editor.chain().focus().toggleBold().run()}
        />
        <FaItalic
          className={editor.isActive("italic") ? activeClass : edditorButtonClass}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        />
        <FaStrikethrough
          className={editor.isActive("strike") ? activeClass : edditorButtonClass}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        />
        <FaUnderline
          className={editor.isActive("underline") ? activeClass : edditorButtonClass}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        />
        <MdFormatListBulleted
          className={editor.isActive("bulletList") ? activeClass : edditorButtonClass}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        />
      </div>
      <div
        className="border-2 rounded-md w-full h-[600px] overflow-y-scroll overflow-hidden p-5"
        onClick={() => editor.chain().focus()}
      >
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
