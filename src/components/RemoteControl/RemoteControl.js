import './RemoteControl.css'
import { Portal } from '../Portal/Portal';
import { DisappearingPortal } from '../DisappearingPortal/DisappearingPortal';
import { Title } from '../Title/Title';
import { useStore } from '../../store/data'
import cx from 'classnames'


export const RemoteControl = () => {
    const contentSelection = useStore(state => state.layouts.contentSelection)
    const navAndContent = useStore(state => state.layouts.navAndContent)
    const landingTitleClasses = cx(
        'landing-Title',
      {'landing-Title--hidden': contentSelection},
      {'landing-Title--hidden': navAndContent},
    )
    const remoteControlContainerClasses = cx(
        'RemoteControl-container',
      {'RemoteControl-container--center': contentSelection},
      {'RemoteControl-container--top': navAndContent},
    )
    return (
        <div className={remoteControlContainerClasses}>
            <Title className={landingTitleClasses} />
            <div className="Portal-group">
                <Portal />
                <Portal>developer</Portal>
                <Portal>musician</Portal>
                <Portal>organizer</Portal>
                <DisappearingPortal className="Portal--specialguy">about</DisappearingPortal>
                <DisappearingPortal>contact</DisappearingPortal>
            </div>
            <div className="Portal-group">
                
            </div>
        </div>
    )
}
