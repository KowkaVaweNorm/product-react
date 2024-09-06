import {
  type ImgHTMLAttributes,
  memo,
  type ReactElement,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { ErrorImage as DefaultErrorFallback } from './ErrorImage/ErrorImage';
interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement | boolean;
}

export const AppImage = memo((props: AppImageProps): JSX.Element => {
  const { className, src, alt = 'image', errorFallback, fallback, ...otherProps } = props;
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
        <img className={className} ref={imgRef} style={{ opacity: 0 }} />
        {fallback}
      </>
    );
  }

  if (hasError) {
    return (
      <>
        {errorFallback !== undefined && typeof errorFallback !== 'boolean' ? (
          <>{errorFallback}</>
        ) : typeof errorFallback === 'boolean' ? (
          <DefaultErrorFallback className={className} alt={alt} {...otherProps} />
        ) : null}
      </>
    );
  }
  return <img className={className} ref={imgRef} alt={alt} {...otherProps} />;
});
