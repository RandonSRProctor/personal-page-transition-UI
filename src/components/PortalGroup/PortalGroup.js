import { useStore } from '../../store/data'
import cx from 'classnames'

export const PortalGroup = ({ children }) => {
    const contentSelection = useStore(state => state.contentSelection)
    const DisappearingPortalClasses = cx(
      'PortalGroup',
      {'PortalGroup--appear': contentSelection}
    )
    return (
        <>
            <div className={DisappearingPortalClasses}>
                {children}
            </div>
        </>
    )
}