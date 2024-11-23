import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type TCodeEditor = typeof import('@uiw/react-textarea-code-editor');

interface EditorContextPayload {
  CodeEditor?: TCodeEditor;
  isLoaded?: boolean;
}

const EditorContext = createContext<EditorContextPayload>({});

const getAsyncEditorModule = async () => {
  return await import('@uiw/react-textarea-code-editor');
};

export const useEditorLib = () => {
  return useContext(EditorContext) as Required<EditorContextPayload>;
};

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const EditorCodeRef = useRef<TCodeEditor>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    void getAsyncEditorModule().then((EditorCode) => {
      EditorCodeRef.current = EditorCode;
      setIsLoaded(true);
    });
  }, []);

  const value = useMemo(
    () => ({
      CodeEditor: EditorCodeRef.current,
      isLoaded,
    }),
    [isLoaded],
  );

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
};
