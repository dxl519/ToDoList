import { useColorMode } from '@chakra-ui/react'

export const Home: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div>
      <span>当前主题为: {colorMode}</span>
      <button onClick={toggleColorMode}>点击切换主题色</button>
    </div>
  )
}
