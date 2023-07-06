import { useEffect, type FC } from 'react'
import { useDispatch, useStore } from 'react-redux'
import {
  type ReduxStoreWithManager,
  type StateSchemaKey
} from 'app/providers/StoreProvider/config/StateSchema'
import { type Reducer } from 'redux'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props): JSX.Element => {
  const { children, reducers, removeAfterUnmount = false } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
          store.reducerManager.remove(name)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
      <>
          {children}
      </>
  )
}
