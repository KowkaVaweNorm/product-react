import {
  type ImgHTMLAttributes,
  memo,
  type ReactElement,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { ErrorImage as DefaultErrorFallback } from './ErrorImage/ErrorImage';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import cls from './AppImage.module.scss';
import { VStack } from '../Stack';
interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement | boolean;
}

export const AppImage = memo((props: AppImageProps): JSX.Element => {
  const { className, src, alt = 'image', errorFallback, fallback, style, ...otherProps } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  useLayoutEffect(() => {
    const img = imgRef.current;
    if (img != null) {
      img.src = src ?? '';
      img.onload = () => {
        setIsLoading(false);
        setHasError(false);
      };
      img.onerror = (e) => {
        if (__IS_DEV__ && src !== '') {
          console.error('Failed load image:', e, 'with source:', src);
        }

        setIsLoading(false);
        setHasError(true);
      };
    }
    return () => {
      setIsLoading(true);
      setHasError(false);
    };
  }, [src, imgRef]);
  let additionalContent = null;
  let showImg = true;
  if (isLoading && fallback != null) {
    additionalContent = fallback;
    showImg = false;
  }

  if (hasError && !isLoading) {
    showImg = false;
    additionalContent =
      errorFallback !== undefined && typeof errorFallback !== 'boolean' ? (
        errorFallback
      ) : typeof errorFallback === 'boolean' ? (
        <DefaultErrorFallback className={className} alt={alt} {...otherProps} />
      ) : null;
  }
  return (
    <VStack align="center" justify="center" className={className} style={style}>
      {additionalContent}
      <img
        className={classNames(
          cls.img,
          {
            [cls.hidden ?? '']: !showImg,
          },
          [className],
        )}
        ref={imgRef}
        alt={alt}
        {...otherProps}
      />
    </VStack>
  );
});
