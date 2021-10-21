import './TopLevelTransparentClick.css'
import { useStore } from '../../store/data'
import cx from 'classnames'

export const TopLevelTransparentClick = () => {
    const contentSelection = useStore(state => state.layouts.contentSelection)
    const navAndContent = useStore(state => state.layouts.navAndContent)
    const setLayoutTocontentSelection = useStore(state => state.setLayoutTocontentSelection)
    const setLayoutToNavAndContent = useStore(state => state.setLayoutToNavAndContent)
    const TLTCClasses = cx(
        'TopLevelTransparentClick',
        {'TopLevelTransparentClick--bottom-of-stack': contentSelection},
        {'TopLevelTransparentClick--bottom-of-stack': navAndContent},
      )
    return (
        <>
            <div onClick={setLayoutToNavAndContent} className={TLTCClasses} />
        </>
    )
}
