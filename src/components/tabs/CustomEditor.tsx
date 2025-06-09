import { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

interface CustomEditorProps {
  value?: string;
  onChange?: (content: string) => void;
  readOnly?: boolean;
  placeholder?: string;
}

const CustomEditor = forwardRef<Quill, CustomEditorProps>(
  ({ value = '', onChange, readOnly = false, placeholder = '' }, ref) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const quillRef = useRef<Quill | null>(null);
    const contentRef = useRef(value);

    useLayoutEffect(() => {
      if (!editorRef.current) return;

      const editorElement = document.createElement('div');
      editorRef.current.innerHTML = '';
      editorRef.current.appendChild(editorElement);

      const quill = new Quill(editorElement, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image', 'video'],
            ['clean'],
          ],
        },
        placeholder,
        readOnly,
      });

      quillRef.current = quill;
      if (ref) {
        if (typeof ref === 'function') {
          ref(quill);
        } else {
          ref.current = quill;
        }
      }

      if (contentRef.current) {
        quill.clipboard.dangerouslyPasteHTML(contentRef.current);
      }

      quill.on('text-change', () => {
        if (onChange) {
          const editorContent = quill.root.innerHTML;
          if (editorContent !== '<p><br></p>') {
            onChange(editorContent);
          } else {
            onChange('');
          }
        }
      });

      return () => {
        if (ref) {
          if (typeof ref === 'function') {
            ref(null);
          } else {
            ref.current = null;
          }
        }
        quillRef.current = null;
        if (editorRef.current) {
          editorRef.current.innerHTML = '';
        }
      };
    }, [ref, placeholder, readOnly, onChange]);

    useEffect(() => {
      if (quillRef.current && value !== contentRef.current) {
        contentRef.current = value;
        if (value) {
          quillRef.current.clipboard.dangerouslyPasteHTML(value);
        } else {
          quillRef.current.setText('');
        }
      }
    }, [value]);

    return <div ref={editorRef} />;
  }
);

export default CustomEditor;