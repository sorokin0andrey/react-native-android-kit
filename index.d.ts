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
		backgroundColor: string
		indicatorTabColor: string
    indicatorTabHeight: number
    contentHeight: number
		children: React.ReactNode
		scrollable?: boolean
		backgroundImage?: string
		center?: boolean
}


export class TabLayoutItem extends React.Component<ItemProps> {

}

export class TabLayoutAndroid extends React.Component<LayoutProps> {
  static Item: typeof TabLayoutItem
}