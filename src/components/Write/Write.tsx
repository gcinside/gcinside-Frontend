import { useRouter } from 'next/router';
import * as S from './Style';
import '@toast-ui/editor/dist/toastui-editor.css';
import { EditorProps } from '@toast-ui/react-editor';
import dynamic from 'next/dynamic';

const Editor = dynamic<EditorProps>(
  () => import('@toast-ui/react-editor').then(md => md.Editor),
  { ssr: false },
);

const Write: React.FC = () => {
  const router = useRouter();
  return (
    <S.Positioner>
      <input type="text" placeholder="제목을 입력하세요" />
      <Editor
        previewStyle="vertical"
        initialEditType="markdown"
        useCommandShortcut={true}
        height="80%"
        placeholder="내용을 입력하세요"
      />
      <S.BtnWrapper>
        <S.BackBtn onClick={() => router.push('./home')}>돌아가기</S.BackBtn>
        <S.CompleteBtn>작성하기</S.CompleteBtn>
      </S.BtnWrapper>
    </S.Positioner>
  );
};

export default Write;
