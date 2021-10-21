import { RemoteControl } from '../RemoteControl/RemoteControl'
import './CentralContainer.css'
import { useStore } from '../../store/data'
import cx from 'classnames'

export const CentralContainer = () => {
    const contentSelection = useStore(state => state.contentSelection)
    const navAndContent = useStore(state => state.layouts.navAndContent)
    const CentralContainerClasses = cx(
      'CentralContainer',
      {'CentralContainer--usercontentSelection': contentSelection},
      {'CentralContainer--userHasSelectedPortal': navAndContent},
    )
    return (
        <div className={CentralContainerClasses}>
            <RemoteControl />
        </div>
    )
}
