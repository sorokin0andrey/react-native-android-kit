import * as React from 'react'
import { ViewPagerAndroidProps } from 'react-native'

interface ItemProps {
  text: string
  textSize: number
  icon?: string
  iconPosition?: 'top' | 'right' | 'bottom' | 'left'
  textColor?: string
  selectedTextColor?: string
  customView?: boolean
}

type LayoutProps = ViewPagerAndroidProps & {
		backgroundColor: PropTypes.string,
		indicatorTabColor: PropTypes.string,
		indicatorTabHeight: number
		children: React.ReactNode
		scrollable?: boolean
		backgroundImage?: string
		center?: boolean
}

export namespace TabLayoutAndroid {
  export default class TabLayoutAndroid extends React.Component<LayoutProps> {

  }
  export class Item extends React.Component<ItemProps> {

  }
}