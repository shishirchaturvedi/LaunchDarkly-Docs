/** @jsx jsx */
import { jsx } from 'theme-ui'
import Icon from './icon'
import Hamburger from './sideNav/hamburger'
import TopNav from './topNav'
import SearchRoot from './search/searchRoot'
import Link from './link'

const Header = () => {
  return (
    <header sx={{ gridArea: 'header', bg: 'secondaryDark', color: 'white' }}>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: ['100%', '18rem auto', '18rem 48rem auto'],
          minHeight: '100%',
          gridTemplateAreas: [
            `
            'mobile'
            `,
            `
            'brand nav'
            `,
            `
            'brand nav nav'
            `,
          ],
        }}
      >
        <span sx={{ gridArea: 'brand', display: ['none', 'flex'], alignItems: 'center', ml: [4, 6] }}>
          <Link to="/" aria-label="Go to the LaunchDarkly documentation homepage">
            <Icon name="launchdarkly-logo" variant="header" sx={{ height: [null, 3] }} />
          </Link>
        </span>
        <span
          sx={{
            gridArea: ['mobile', 'nav'],
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link to="/" sx={{ height: 3, mx: 5, display: ['block', 'none'] }}>
            <Icon name="launchdarkly-icon" variant="header" />
          </Link>
          <span sx={{ ml: [0, 9, '4.5rem'] }}>
            <TopNav />
          </span>
          <div
            sx={{
              gridArea: ['nav'],
              display: 'flex',
              alignItems: 'right',
              width: ['100%', '100%', '35%'],
              mx: [0, 4],
              ml: [0, 0, 4],
            }}
          >
            <SearchRoot />
          </div>
          <span sx={{ display: ['block', 'none'], mx: 5 }}>
            <Hamburger />
          </span>
        </span>
      </div>
    </header>
  )
}

export default Header
