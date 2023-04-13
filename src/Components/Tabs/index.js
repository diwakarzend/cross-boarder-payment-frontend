import React from 'react';
import { Wrapper } from './style';

export default function Tabs({ onTabClick = () => {}, tablist = [], activeTab }) {

    return (
        <Wrapper className='tab-list-wrapper'>
            {
                tablist.map((data, i) => 
                    <div onClick={() => onTabClick(data?.value)} className={`tab-list${activeTab === data?.value ? ' active' : ''}`}>{data?.label}</div>
                )
            }
        </Wrapper>
    )
}