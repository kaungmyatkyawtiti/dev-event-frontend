import { Action, combineSlices, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { eventsApiSlice } from './features/events/eventsApiSlice';

const rootReduer = combineSlices(
  eventsApiSlice,
);

export type RootState = ReturnType<typeof rootReduer>;

export const makeStore = () => {
  return configureStore({
    reducer: rootReduer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(
        eventsApiSlice.middleware
      )
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
