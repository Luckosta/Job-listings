import { useSelector } from 'react-redux';
import { allPositions } from 'store/positions/position-selectors';
import { JobPosition } from './JobPosition';

const JobList = () => {

	const positions = useSelector(allPositions);
  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  )
}

export {JobList};