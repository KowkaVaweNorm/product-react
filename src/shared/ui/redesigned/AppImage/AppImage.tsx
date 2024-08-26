import React, {
  type ImgHTMLAttributes,
  memo,
  type ReactElement,
  type ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { ErrorFallback as DefaultErrorFallback } from './ErrorFallback';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  ErrorFallback?: ReactNode;
}

export const AppImage = memo((props: AppImageProps): JSX.Element => {
  const { className, src, alt = 'image', ErrorFallback, fallback, ...otherProps } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  useLayoutEffect(() => {
    const img = imgRef.current;
    if (img != null) {
      img.src = src ?? '';
      img.onload = () => {
        setIsLoading(false);
      };
      img.onerror = () => {
        setIsLoading(false);
        setHasError(true);
      };
    }
  }, [src, imgRef]);

  if (isLoading && fallback != null) {
    return (
      <>
        <img ref={imgRef} style={{ opacity: 0 }} />
        {fallback}
      </>
    );
  }

  if (hasError) {
    console.log('has Error:', hasError);
    return (
      <>
        {ErrorFallback ? (
          <ErrorFallback className={className} alt={alt} {...otherProps} />
        ) : (
          <DefaultErrorFallback className={className} alt={alt} {...otherProps} />
        )}
      </>
    );
  }
  return <img className={className} ref={imgRef} alt={alt} {...otherProps} />;
});
