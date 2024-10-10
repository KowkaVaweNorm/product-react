/* eslint-disable i18next/no-literal-string */
import { EditorProvider, useEditorLib } from '@/shared/lib/components/EditorProvider';
import { type ChangeEvent, useState } from 'react';

type SupportedLanguage =
  | 'arduino'
  | 'ino'
  | 'bash'
  | 'sh'
  | 'shell'
  | 'basic'
  | 'c'
  | 'clike'
  | 'cpp'
  | 'csharp'
  | 'cs'
  | 'dotnet'
  | 'css'
  | 'diff'
  | 'go'
  | 'ini'
  | 'java'
  | 'javascript'
  | 'js'
  | 'json'
  | 'webmanifest'
  | 'kotlin'
  | 'kt'
  | 'kts'
  | 'less'
  | 'lua'
  | 'makefile'
  | 'markdown'
  | 'md'
  | 'markup'
  | 'atom'
  | 'html'
  | 'mathml'
  | 'rss'
  | 'ssml'
  | 'svg'
  | 'xml'
  | 'markup-templating';

interface IProps {
  className?: string;
  onChange?: (arg: string) => void;
  lng?: SupportedLanguage;
}

export const CodeEditor = (props: IProps) => {
  const { onChange, lng, ...otherProps } = props;
  const { CodeEditor: CodeEditorLib } = useEditorLib();
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  const [localLng, setLocalLng] = useState<SupportedLanguage>('js');

  const onChangeLocal = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const value = event.target.value;
    setCode(value);

    if (onChange != null) {
      onChange(value);
    }
  };

  return (
    <EditorProvider>
      <CodeEditorLib.default
        value={code}
        language={lng ?? localLng}
        placeholder="Ваш код"
        onChange={onChangeLocal}
        padding={15}
        style={{
          backgroundColor: 'black',
          fontFamily: 'monospace',
          font: 'var(--font-m)',
        }}
        {...otherProps}
      />
    </EditorProvider>
  );
};
