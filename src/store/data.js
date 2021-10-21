import create from 'zustand';
import { devtools } from 'zustand/middleware'
import { thereCanBeOnlyOne } from '../utils/toolbox';

const data = {
  layouts: {
    landing: true,
    contentSelection: false,
    navAndContent: false
  },
  footer: {
    main: 'Here is the main footer text',
    about: 'Here is the about text',
    portfolio: 'Here is the portfolio text'
  }
}

export const useStore = create(devtools(set => ({
  ...data,
  setLayoutToLanding: () => set(state => ({ layouts: thereCanBeOnlyOne(state.layouts, 'landing') })),
  setLayoutTocontentSelection: () => set(state => ({ layouts: thereCanBeOnlyOne(state.layouts, 'contentSelection') })),
  setLayoutToNavAndContent: () => set(state => ({ layouts: thereCanBeOnlyOne(state.layouts, 'navAndContent') })),
})))
