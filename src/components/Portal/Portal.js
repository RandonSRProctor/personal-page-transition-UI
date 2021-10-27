import './Portal.css'
import { useStore } from '../../store/data'
import cx from 'classnames'

export const Portal = ({ children }) => {
    const contentSelection = useStore(state => state.layouts.contentSelection)
    const navAndContent = useStore(state => state.layouts.navAndContent)
    const setLayoutToNavAndContent = useStore(state => state.setLayoutToNavAndContent)
    const PortalClasses = cx(
      'Portal',
      {'Portal--expand-large': contentSelection},
      {'Portal--expand-small': navAndContent},
    )
    return (
        <div>
            <div onClick={setLayoutToNavAndContent} className={PortalClasses}>
                {children}
            </div>
        </div>
    )
}
