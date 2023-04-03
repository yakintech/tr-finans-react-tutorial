import React from 'react'
import SiteAbout from './SiteAbout'
import SiteContact from './SiteContact'
import SiteMenu from './SiteMenu'

function PageContent() {
    return (<>
        <div className='w3-content' style={{ maxWidth: 1100 }}>
            <SiteAbout />
            <SiteMenu />
            <SiteContact/>
        </div>
    </>)
}

export default PageContent