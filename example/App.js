import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  Platform,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {Header} from './Components/Header';
import {DemoModal} from './Components/DemoModal';
import * as TagDemos from '../packages/Tag/demos/index';
import * as IconDemos from '../packages/Icon/demos/index';
import * as SpinDemos from '../packages/Spin/demos/index';
import * as BadgeDemos from '../packages/Badge/demos/index';
import * as RadioDemos from '../packages/Radio/demos/index';
import * as ButtonDemos from '../packages/Button/demos/index';
import * as RatingDemos from '../packages/Rating/demos/index';
import * as SliderDemos from '../packages/Slider/demos/index';
import * as SwitchDemos from '../packages/Switch/demos/index';
import * as DividerDemos from '../packages/Divider/demos/index';
import * as TooltipDemos from '../packages/Tooltip/demos/index';
import * as CarouselDemos from '../packages/Carousel/demos/index';
import * as CheckBoxDemos from '../packages/CheckBox/demos/index';
import * as ProgressDemos from '../packages/Progress/demos/index';
import * as SkeletonDemos from '../packages/Skeleton/demos/index';
import * as SwipeOutDemos from '../packages/SwipeOut/demos/index';
import * as DeckSwiperDemos from '../packages/DeckSwiper/demos/index';
import * as ScrollPickerDemos from '../packages/ScrollPicker/demos/index';

const {width} = Dimensions.get('window');

const COLORS = ['#FF4777', '#725E82', '#FFA400', '#5D513C', '#00BC12', '#CA6924', '#CB3A56'];
const APP_DATA = [
  {
    title: 'Badge',
    demos: [
      {title: 'Pure Dot Style', component: BadgeDemos.Demo1},
      {title: 'Number Within Dot Style', component: BadgeDemos.Demo2},
      {title: 'Customize Color', component: BadgeDemos.Demo3},
      {title: 'Friendly Animation', component: BadgeDemos.Demo4},
    ]
  },
  {
    title: 'Button',
    demos: [
      {title: 'Button Types', component: ButtonDemos.Demo1},
      {title: 'Button Sizes', component: ButtonDemos.Demo2},
      {title: 'Button Shapes', component: ButtonDemos.Demo3},
      {title: 'Icon Buttons', component: ButtonDemos.Demo4},
      {title: 'Block Buttons', component: ButtonDemos.Demo5},
      {title: 'Link Buttons', component: ButtonDemos.Demo6},
      {title: 'Outline Buttons', component: ButtonDemos.Demo7},
    ]
  },
  {
    title: 'Carousel',
    demos: [
      {title: 'Default Carousel', component: CarouselDemos.Demo1},
      {title: 'Looped Carousel', component: CarouselDemos.Demo2},
      {title: 'Vertical Carousel', component: CarouselDemos.Demo3},
      {title: 'Item Size Smaller Than Container', component: CarouselDemos.Demo4},
      {title: 'Center Mode Enabled', component: CarouselDemos.Demo5},
      {title: 'Auto Play Enabled', component: CarouselDemos.Demo6},
      {title: 'Customize Pagination Style', component: CarouselDemos.Demo7},
    ]
  },
  {
    title: 'CheckBox',
    demos: [
      {title: 'Basic Usage', component: CheckBoxDemos.Demo1},
      {title: 'Disabled CheckBox', component: CheckBoxDemos.Demo2},
      {title: 'Customized Icon Style', component: CheckBoxDemos.Demo3},
      {title: 'Three Animation Types', component: CheckBoxDemos.Demo4},
    ]
  },
  {
    title: 'DeckSwiper',
    demos: [
      {title: 'Basic Usage', component: DeckSwiperDemos.Demo1}
    ]
  },
  {
    title: 'Divider',
    demos: [
      {title: 'Horizontal Divider', component: DividerDemos.Demo1},
      {title: 'Vertical Divider', component: DividerDemos.Demo2}
    ]
  },
  {
    title: 'Icon',
    demos: [
      {title: 'Various Sizes', component: IconDemos.Demo1},
      {title: 'Various Types', component: IconDemos.Demo2},
      {title: 'Various Colors', component: IconDemos.Demo3},
    ]
  },
  {
    title: 'Progress',
    demos: [
      {title: 'Line Progress Bar', component: ProgressDemos.Demo1},
      {title: 'Colorful (Supports Gradient)', component: ProgressDemos.Demo2},
      {title: 'Circular Progress Bar', component: ProgressDemos.Demo3},
      {title: 'Dynamic Percent Changing Transition', component: ProgressDemos.Demo4},
      {title: 'Customized Percent Formatter', component: ProgressDemos.Demo5},
    ]
  },
  {
    title: 'Radio',
    demos: [
      {title: 'Basic Usage', component: RadioDemos.Demo1},
      {title: 'Disabled Radio', component: RadioDemos.Demo2},
      {title: 'Customized Icon Style', component: RadioDemos.Demo3},
      {title: 'Three Animation Types', component: RadioDemos.Demo4},
    ]
  },
  {
    title: 'Rating',
    demos: [
      {title: 'Basic Usage', component: RatingDemos.Demo1},
      {title: 'Customize Icon (type, color, size)', component: RatingDemos.Demo2},
      {title: 'Different Step', component: RatingDemos.Demo3},
    ]
  },
  {
    title: 'ScrollPicker',
    demos: [
      {title: 'Basic Usage', component: ScrollPickerDemos.Demo1},
      {title: 'Cascading', component: ScrollPickerDemos.Demo2},
      {title: 'Customize Option Content', component: ScrollPickerDemos.Demo3},
    ]
  },
  {
    title: 'Skeleton',
    demos: [
      {title: 'Default Skeleton', component: SkeletonDemos.Demo1},
      {title: 'Customize Skeleton', component: SkeletonDemos.Demo2},
    ]
  },
  {
    title: 'Slider',
    demos: [
      {title: 'Horizontal Slider', component: SliderDemos.Demo1},
      {title: 'Vertical Slider', component: SliderDemos.Demo2},
      {title: 'Customized Tip', component: SliderDemos.Demo3},
      {title: 'Customized Track and Thumb', component: SliderDemos.Demo4},
    ]
  },
  {
    title: 'Spin',
    demos: [
      {title: 'Ladder', component: SpinDemos.Demo1},
      {title: 'Rainbow', component: SpinDemos.Demo2},
      {title: 'Wave (rect and dot two types)', component: SpinDemos.Demo3},
      {title: 'Rolling Cubes', component: SpinDemos.Demo4},
      {title: 'Chasing Circles', component: SpinDemos.Demo5},
      {title: 'Pulse', component: SpinDemos.Demo6},
      {title: 'Flipping Card', component: SpinDemos.Demo7},
    ]
  },
  {
    title: 'Switch',
    demos: [
      {title: 'Various Sizes', component: SwitchDemos.Demo1},
      {title: 'Various Colors', component: SwitchDemos.Demo2},
      {title: 'Cupertino VS Material', component: SwitchDemos.Demo3},
      {title: 'Enabled VS Disabled', component: SwitchDemos.Demo4},
      {title: 'Value Change Callback', component: SwitchDemos.Demo5},
    ]
  },
  {
    title: 'SwipeOut',
    demos: [
      {title: 'Swipe Out From Left and Right', component: SwipeOutDemos.Demo1},
      {title: 'Multiple Hidden buttons', component: SwipeOutDemos.Demo2},
      {title: 'Custmized Hidden Part', component: SwipeOutDemos.Demo3}
    ]
  },
  {
    title: 'Tag',
    demos: [
      {title: 'Colorful Outline Tags', component: TagDemos.Demo1},
      {title: 'Colorful Solid Tags', component: TagDemos.Demo2},
      {title: 'Closable Tags', component: TagDemos.Demo3}
    ]
  },
  {
    title: 'Tooltip',
    demos: [
      {title: 'Tooltip Usages', component: TooltipDemos.Demo1}
    ]
  }
];

export default class App extends Component {

  state = {
    modalVisible: false,
    selectedComponentIndex: -1
  };

  onCloseModal = () => {
    this.setState({
      modalVisible: false,
      selectedComponentIndex: -1
    });
  }

  onPressCard = (index) => {
    this.setState({
      modalVisible: true,
      selectedComponentIndex: index
    });
  }

  renderItem = ({item, index}) => {
    const {title} = item;
    const firstLetter = title[0];
    return (
      <TouchableOpacity style={styles.card} onPress={() => this.onPressCard(index)}>
        <View style={[styles.badgeWrapper, {backgroundColor: COLORS[index % COLORS.length]}]}>
          <Text style={styles.badgeText}>{firstLetter}</Text>
        </View>
        <Text style={styles.cardTitle}>{title}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const {modalVisible, selectedComponentIndex} = this.state;
    return (
      <React.Fragment>
        <Header title={'Example App'}/>
        <FlatList
          numColumns={2}
          data={APP_DATA}
          style={styles.list}
          keyExtractor={(_, idx) => idx}
          renderItem={this.renderItem}
        />
        <DemoModal
          visible={modalVisible}
          data={APP_DATA[selectedComponentIndex]}
          onClose={this.onCloseModal}
        />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    padding: 5
  },
  card: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: (width - 30) / 2,
    height: (width - 30) / 2,
    backgroundColor: '#FFF',
    ...Platform.select({
      android: {
        elevation: 2
      },
      ios: {
        shadowColor: '#000',
        shadowOpacity: .15,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 5
      }
    })
  },
  badgeWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30
  },
  badgeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF'
  },
  cardTitle: {
    marginTop: 15,
    fontSize: 15,
    color: '#333',
    textAlign: 'center'
  }
});
