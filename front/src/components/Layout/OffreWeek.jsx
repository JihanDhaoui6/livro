import React from 'react'
import styles from '../../styles/style'
import OffreCard from './OffreWeek'

const OffreWeek = () => {
  return (
    <div>
    <div className={`${styles.section}`}>
      <div className={`${styles.heading}`}>
        <h1>Offre de la semaine

        </h1>
      </div>
      <div className='w-full grid'>
            <OffreCard />
      </div>
    </div>
  </div>
  )
}

export default OffreWeek
