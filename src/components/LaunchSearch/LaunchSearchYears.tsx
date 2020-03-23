import React, { useState, useCallback } from 'react';
import { useLaunchListYearQuery } from '../../generated/graphql';
import LaunchListYear from '../LaunchList/LaunchListYear';
import './styles.css';

interface Props {
  handleIdChange: (newId?: number) => void;
};

const className = 'LaunchListSearch';
const years = ['2006', '2007', '2008', '2009', '2010', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

const LaunchSearchYears: React.FC<Props> = ({ handleIdChange }) => {
  const [selected, setSelected] = useState('2006');

  const handleChange = useCallback(e => {
    return setSelected(e.target.value)
  }, []);
    
  const { data: yearData } = useLaunchListYearQuery(
    { variables: { launch_year : selected } }
  );

  return (
    <div className={className}>
      <div className={`${className}__status`}>
        <select className='search' onChange={handleChange} >
          {years.map((year, i) => 
            <option key={i} value={year}>
              {year}
            </option>
          )}
        </select>
      </div>
      <LaunchListYear handleIdChange={handleIdChange} data={yearData} />
    </div>
  );
};

export default LaunchSearchYears;