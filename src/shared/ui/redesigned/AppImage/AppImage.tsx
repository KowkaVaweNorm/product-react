import React, {
  type ImgHTMLAttributes,
  memo,
  type ReactElement,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
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
        <img ref={imgRef} style={{ opacity: 0 }} />
        {fallback}
      </>
    );
  }

  if (hasError && errorFallback != null) {
    return errorFallback;
  }
  return <img className={className} ref={imgRef} alt={alt} {...otherProps} />;
});
