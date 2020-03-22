import React, { useState } from 'react';
import { useRocketsNamesQuery, useMissionsNamesQuery } from '../../generated/graphql';
import LaunchSearchRockets from './LaunchSearchRockets';
import LaunchSearchMissions from './LaunchSearchMissions';
import LaunchSearchYears from './LaunchSearchYears';
import LaunchList from '../LaunchList';
// import LaunchSearchBar from './LaunchSearchBar'

const LaunchSearchContainer = () => {
    const [searchParam, setSearchParam] = useState('Default');
    const { data: data1, error: error1, loading: loading1} = useRocketsNamesQuery();
    const { data: data2, error: error2, loading: loading2} = useMissionsNamesQuery();


    let className = 'LaunchSearchContainer';
    
    if (loading1 || loading2) {
        return <div>Loading Search Parameters...</div>;
    }
    if (error1 || error2) {
        return <div>ERROR</div>;
    }
    if (!data1 || !data2) {
        return <div>Select a flight from the panel</div>;
    }
    return (
    <div>
        <div className={className}>
            <div className={`${className}__status`}>
                Search By:
                <label>
                    <input
                        type="radio"
                        name='search-choice'
                        value='rocket name' 
                        className='searchChoice'
                        // checked={true}
                        onClick={()=> setSearchParam('Default')}
                    />
                Default
            </label>
            <label>
                <input
                    type="radio"
                    name='search-choice'
                    value='rocket name' 
                    className='searchChoice'
                    onClick={()=> setSearchParam('Mission Names')}
                />
                Mission Name
            </label>
            <label>
                <input
                    type="radio"
                    name='search-choice'
                    value='mission name'
                    className='searchChoice' 
                    onClick={()=> setSearchParam('Rocket Names')}
                />
                Rocket Name
            </label>
            <label>
                <input
                    type="radio"
                    name='search-choice'
                    value='launch year' 
                    className='searchChoice'
                    onClick={()=> setSearchParam('Launch Years')}
                />
                Launch Year
            </label>
            <br/>
            {searchParam === 'Rocket Names' &&
            <LaunchSearchRockets data={data1} />
            }
            {searchParam === 'Mission Names' &&
            <LaunchSearchMissions data={data2} />
            }
            {searchParam === 'Launch Years' &&
            <LaunchSearchYears />
            }
            {searchParam === 'Default' &&
            <LaunchList />
            }
        </div>
        </div>
    </div>
    )
};

export default LaunchSearchContainer;
