import React, { useState } from 'react';
import './styles.css';

const className = 'LaunchListBar';

const LaunchSearchBar: React.FC<any> = () => {
    const [searchParam, setSearchParam] = useState('');
    console.log('searchParam', searchParam);
    return (
        <div className={className}>
            <div className={`${className}__status`}>
                Search By:
                <label>
                    <input
                        type="radio"
                        name='search-choice'
                        value='rocket name' 
                        className='searchChoice'
                        onClick={()=> setSearchParam('default')}
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
                    onClick={()=> setSearchParam('Launch Year')}
                />
                Launch Year
            </label>
            <br/>
        </div>
    </div>
  );
};

export default LaunchSearchBar;