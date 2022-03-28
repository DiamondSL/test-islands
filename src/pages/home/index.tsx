import { FC } from 'react'
import { Layout } from 'antd'
import { useOutletContext } from 'react-router-dom'
import Island from "src/components/island-components/island";
import { HeroSection } from 'src/components/section'

const Home: FC = () => {
  const props = useOutletContext<HomeFragment>()
  return <Layout.Content>{props && <HeroSection {...props.hero} />}
    {<Island />}
  </Layout.Content>
}

export { Home as default }
