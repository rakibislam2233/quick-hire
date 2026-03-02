"use client";
import {
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Link as LinkIcon,
  List,
  ListOrdered,
  Underline as UnderlineIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./button";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const RichTextEditor = ({ value, onChange, placeholder = "Start typing...", className = "" }: RichTextEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isLinkDialogOpen, setIsLinkDialogOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");

  useEffect(() => {
    if (editorRef.current && value !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    handleChange();
  };

  const handleChange = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const addLink = () => {
    if (linkUrl) {
      const selection = window.getSelection();
      if (selection && selection.toString()) {
        execCommand("createLink", linkUrl);
      }
      setLinkUrl("");
      setIsLinkDialogOpen(false);
    }
  };

  const removeLink = () => {
    execCommand("unlink");
  };

  const insertList = (ordered: boolean = false) => {
    const command = ordered ? "insertOrderedList" : "insertUnorderedList";
    execCommand(command);
  };

  return (
    <div className={`border border-gray-200 rounded-none ${className}`}>
      {/* Toolbar */}
      <div className="border-b border-gray-200 p-2 flex items-center gap-1 bg-gray-50">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand("bold")}
          className="p-2"
        >
          <BoldIcon className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand("italic")}
          className="p-2"
        >
          <ItalicIcon className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand("underline")}
          className="p-2"
        >
          <UnderlineIcon className="w-4 h-4" />
        </Button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertList(false)}
          className="p-2"
        >
          <List className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertList(true)}
          className="p-2"
        >
          <ListOrdered className="w-4 h-4" />
        </Button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setIsLinkDialogOpen(true)}
          className="p-2"
        >
          <LinkIcon className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={removeLink}
          className="p-2"
        >
          Remove Link
        </Button>
      </div>

      {/* Link Dialog */}
      {isLinkDialogOpen && (
        <div className="border-b border-gray-200 p-3 bg-gray-50">
          <div className="flex items-center gap-2">
            <input
              type="url"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="Enter URL (e.g., https://example.com)"
              className="flex-1 px-3 py-2 border border-gray-200 rounded-none text-sm focus:outline-none focus:border-primary"
              autoFocus
            />
            <Button
              type="button"
              size="sm"
              onClick={addLink}
              className="bg-primary text-white"
            >
              Add
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setIsLinkDialogOpen(false);
                setLinkUrl("");
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleChange}
        className="min-h-[120px] p-3 focus:outline-none prose prose-sm max-w-none"
        style={{
          minHeight: "120px",
          padding: "12px",
          outline: "none",
        }}
        suppressContentEditableWarning={true}
        dangerouslySetInnerHTML={{ __html: placeholder && !value ? `<p style="color: #9ca3af;">${placeholder}</p>` : "" }}
      />
    </div>
  );
};

export default RichTextEditor;
