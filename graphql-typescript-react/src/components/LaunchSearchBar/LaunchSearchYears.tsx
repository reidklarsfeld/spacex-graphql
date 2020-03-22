import React, { useState } from 'react';
import { useLaunchListYearQuery } from '../../generated/graphql';
import LaunchListYear from '../LaunchList/LaunchListYear';
import './styles.css';

const className = 'LaunchListYears';
const years = ['2006', '2007', '2008', '2009', '2010', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']

const LaunchSearchYears: React.FC<any> = () => {
    const [selected, setSelected ] = useState('2006')
    const handleChange = React.useCallback(e => {
        return setSelected(e.target.value)
    }, []);
    
    const { data: yearData } = useLaunchListYearQuery(
        {variables: { launch_year : selected }}
      );

  return (
    <div className={className}>
        <div className={`${className}__status`}>
            <select className='yearsearch' onChange={handleChange} >
                {years.map((year, i) => 
                    <option key={i} value = {year}>
                        {year}
                    </option>
                )}
            </select>
            <LaunchListYear data={yearData} />
        </div>
    </div>
  );
};

export default LaunchSearchYears;