declare module '@rn-components-kit/tag' {

  import React from 'react';
  import {ViewStyle} from 'react-native'

  interface Props {

    /**
     * Allow you to custom style
     */
    style?: ViewStyle;

    /**
     * Text inside tag to display
     */
    text: string;

    /**
     * Determines the tag's type (outline or solid)
     * default: 'outline'
     */
    type?: 'outline' | 'solid';

    /**
     * Determines the tag's color
     * default: '#333'
     */
    color?: 'string';

    /**
     * Determines the fontSize of tag's text
     * default: 14
     */
    fontSize?: number;

    /**
     * Padding value in the horizontal orientation
     * default: 4
     */
    paddingHorizontal?: number;

    /**
     * Padding value in the vertical orientation
     * default: 1
     */
    paddingVertical?: number;

    /**
     * Determines the border radius value of tag
     * default: 3
     */
    borderRadius?: number;

    /**
     * Determines whether an animation enabled when the tag is closed
     * default: false
     */
    animatedWhenDisappear?: boolean;

    /**
     * Determines how long the disappearing animation will take when tag is closed. (ms)
     * default: 300
     */
    animationDuration?: number;

    /**
     * Determines whether a tag can be closed
     * default: false
     */
    closable?: boolean;

    /**
     * A callback will be triggered when the tag is closed
     */
    onClose?: (text: string) => void;
  }

  export class Tag extends React.PureComponent<Props> {}
}