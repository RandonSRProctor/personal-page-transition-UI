import './CollapsableLandingBackground.css'
import { useStore } from '../../store/data'
import cx from 'classnames'

export const CollapsableLandingBackground = () => {
    const landing = useStore(state => state.layouts.landing)
    const setLayoutToLanding = useStore(state => state.setLayoutToLanding)
    const backgroundClasses = cx(
      'CollapsableLandingBackground',
      {'CollapsableLandingBackground--collapse-to-corner': landing===false}
    )
    return (
      <>
          <div onClick={setLayoutToLanding} className={backgroundClasses} />
      </>
    )
}
