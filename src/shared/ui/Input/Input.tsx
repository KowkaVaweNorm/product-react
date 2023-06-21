import { classNames } from 'shared/lib/ClassNames/ClassNames'
import cls from './Input.module.scss'
import { memo, type InputHTMLAttributes, useState } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  type?: string
  placeholder: string
}

export const Input = memo((props: InputProps): JSX.Element => {
  const {
    className = '',
    value = '',
    onChange,
    type = 'text',
    placeholder = ''
  } = props

  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  const onBlur = (): void => {
    setIsFocused(false)
  }
  const onFocus = (): void => {
    setIsFocused(true)
  }
  const onSelect = (e: any): void => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }

  return (
      <div
          className={ classNames(cls.InputWrapper ?? '', {}, [])}
      >
          { (placeholder.length > 0) && (

          <div className={cls.placeholder}>
              {`${placeholder}>`}
          </div>
          ) }
          <div
              className={cls.caretWrapper}
          >

              <input
                  type={type}
                  value={value}
                  onChange={onChangeHandler}
                  className={cls.input}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSelect={onSelect}
              />
              { isFocused && <span
                  className={cls.caret}
                  style={{ left: `${caretPosition}ch` }}
              >
              </span>}
          </div>

      </div>
  )
}
)
