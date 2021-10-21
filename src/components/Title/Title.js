import './Title.css'
import { useStore } from '../../store/data'
import cx from 'classnames'

export const Title = ( {className }) => {
    const contentSelection = useStore(state => state.contentSelection)
    const TitleClasses = cx(
      className,
      'Title',
      {'Title--starting-location': !contentSelection},
      {'Title--header-location': contentSelection}
    )
    return (
        <>
            <h1 className={TitleClasses}>Randy Proctor</h1>
        </>
    )
}
