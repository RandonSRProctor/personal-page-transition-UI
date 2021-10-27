import './DisappearingPortal.css'
import { useStore } from '../../store/data'
import cx from 'classnames'

export const DisappearingPortal = ({ children }) => {
    const contentSelection = useStore(state => state.layouts.contentSelection)
    const navAndContent = useStore(state => state.layouts.navAndContent)
    const DisappearingPortalClasses = cx(
      'DisappearingPortal',
      {'DisappearingPortal--appear': contentSelection},
      {'DisappearingPortal--appear-small': navAndContent},
    )
    return (
        <div>
            <div className={DisappearingPortalClasses}>
                {children}
            </div>
        </div>
    )
}
