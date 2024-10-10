import { CodeEditor } from '@/shared/ui/redesigned/CodeEditor';
import cls from './EditableCodeBlock.module.scss';
/* eslint-disable i18next/no-literal-string */
export const EditableCodeBlock = () => {
  return (
    <>
      <CodeEditor className={cls.EditorBlock} />
    </>
  );
};
